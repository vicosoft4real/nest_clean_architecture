import { TodoTask } from 'src/domain/model/TodoTask';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICategoryRepsoitory } from 'src/domain/interface/repository/ICategoryRepository';
import { TodoCategory } from 'src/domain/model/TodoCategory';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from '../enity/category.entity';
import { Todo } from '../enity/todo.entity';

@Injectable()
export class CategoryRepository implements ICategoryRepsoitory {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
  async getAllWithTodo(): Promise<TodoCategory[]> {
    const query = await this.categoryRepo
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.todo', 'todo')
      .getMany();
    return query.map((q) => this.toModel(q));
  }
  async getAll(): Promise<TodoCategory[]> {
    const category = await this.categoryRepo.find({
      select: ['id', 'name'],
    });

    return category?.map((entity) => this.toModel(entity));
  }
  async getById(id: number): Promise<TodoCategory> {
    const todo = await this.categoryRepo.findOneByOrFail({ id });
    return this.toModel(todo);
  }
  async getByName(name: string): Promise<TodoCategory> {
    const category = await this.categoryRepo.findOneBy({ name });
    return this.toModel(category);
  }
  async insert(category: TodoCategory): Promise<void> {
    const catEntity = this.toEntity(category);
    await this.categoryRepo.insert(catEntity);
  }
  async remove(id: number): Promise<void> {
    await this.categoryRepo.delete(id);
  }
  private toModel(categoryEntity: Category): TodoCategory {
    if (categoryEntity) {
      const category: TodoCategory = new TodoCategory(
        categoryEntity.name,
        categoryEntity.id,
        categoryEntity.todo
          ? categoryEntity.todo.map(
              (x) =>
                new TodoTask(
                  x.content,
                  x.isDone,
                  // new TodoCategory(x.category.name, x.id),
                  null,
                  x.id,
                  x.createdate,
                  x.updateddate,
                ),
            )
          : null,
      );
      return category;
    }
    return null;
  }
  private toEntity(todoModel: TodoCategory): Category {
    const todoEntity: Category = new Category();

    if (todoModel) {
      todoEntity.id = todoModel.getId();
      todoEntity.name = todoModel.getName();
      todoEntity.todo = todoModel.getTodo()
        ? todoModel.getTodo()?.map((x) => {
            const t = new Todo();
            (t.content = x.getContent()), (t.isDone = x.getIsDone());
            t.id = x.getId();
            return t;
          })
        : null;
    }

    return todoEntity;
  }
}
