import { ApiProperty } from '@nestjs/swagger';
import { TodoResponse } from 'src/usecase/todo/query/getTodoResponse';
import { CategoryDto } from '../dto/categprydto';

export class TodoPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  isDone: boolean;
  @ApiProperty()
  createdate: Date;
  @ApiProperty()
  updateddate: Date;
  @ApiProperty()
  category: CategoryDto;

  constructor(todo: TodoResponse) {
    this.id = todo?.id;
    this.content = todo?.content;
    this.isDone = todo?.isDone;
    this.createdate = todo?.createdDate;
    this.category = todo?.category;
  }
}
