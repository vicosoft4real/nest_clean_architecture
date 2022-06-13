import { ApiProperty } from '@nestjs/swagger';
import { CategoryTodoResponse } from 'src/usecase/category/query/getCategoryWithTodo/CategoryTodoResponse';
import { TodoPresenter } from './todoPresenter';

export class CategoryTodoPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  todo: TodoPresenter[];
  constructor(category: CategoryTodoResponse) {
    this.id = category.id;
    this.name = category.name;
    this.todo = category.todos?.map((todo) => new TodoPresenter(todo));
  }
}
