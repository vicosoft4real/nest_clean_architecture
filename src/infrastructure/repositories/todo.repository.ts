import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoRepository } from 'src/domain/interface/repository/ITodoRepository';
import { TodoCategory } from 'src/domain/model/TodoCategory';
import { TodoTask } from 'src/domain/model/TodoTask';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from '../enity/category.entity';

import { Todo } from '../enity/todo.entity';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  async getByCategoryName(categoryName: string): Promise<TodoTask[]> {
    const todo = await this.todoRepo.findBy({
      category: { name: categoryName },
    });
    return todo?.map((entity) => this.toModel(entity));
  }

  async insert(todo: TodoTask): Promise<void> {
    const categoryId = todo.getCategory()?.getId();
    const categoryName = todo.getCategory()?.getName();

    const todoEntity = this.toEntity(todo);
    if (categoryId > 0) {
      const category = await this.categoryRepo.findOneBy({
        id: categoryId,
      });
      if (category) {
        todoEntity.category = category;
        await this.todoRepo.save(todoEntity);
        return;
      }
    }
    if (categoryName !== '') {
      const category = new Category();
      category.name = categoryName;
      await this.categoryRepo.insert(category);
      todoEntity.category = category;
      await this.todoRepo.save(todoEntity);
      return;
    }
  }
  async findAll(): Promise<TodoTask[]> {
    const todoEntity = await this.todoRepo.find({
      relations: ['category'],
    });
    return todoEntity?.map((entity) => this.toModel(entity));
  }

  async findById(id: number): Promise<TodoTask> {
    const todoEntity = await this.todoRepo.findOneBy({ id: id });
    return this.toModel(todoEntity);
  }

  async updateContent(
    id: number,
    content: string,
    isDone?: boolean,
    categoryId?: number,
  ): Promise<void> {
    const todo = await this.todoRepo.findOneBy({ id: id });
    if (todo) {
      if (content !== '' && content !== todo.content) {
        todo.content = content;
      }

      if (isDone !== todo.isDone) todo.isDone = isDone;
      if (categoryId > 0) {
        const category = await this.categoryRepo.findOneByOrFail({
          id: categoryId,
        });
        if (category) todo.category = category;
        else throw new Error('Category not found');
      }
      await this.todoRepo.save(todo);
    }
  }
  async deleteById(id: number): Promise<void> {
    await this.todoRepo.delete(id);
  }

  private toModel(todoEntity: Todo): TodoTask {
    const todo: TodoTask = new TodoTask(
      todoEntity.content,
      todoEntity.isDone,
      new TodoCategory(todoEntity.category?.name, todoEntity.category?.id),
      todoEntity.id,
      todoEntity.createdate,
      todoEntity.updateddate,
    );
    return todo;
  }
  private toEntity(todoModel: TodoTask): Todo {
    const todoEntity: Todo = new Todo();

    todoEntity.id = todoModel.getId();
    todoEntity.content = todoModel.getContent();
    todoEntity.isDone = todoModel.getIsDone();
    todoEntity.category = new Category();
    todoEntity.category.name = todoModel.getCategory()?.getName();
    todoEntity.category.id = todoModel.getCategory()?.getId();

    return todoEntity;
  }
}
