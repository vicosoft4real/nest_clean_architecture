import { ApiProperty } from '@nestjs/swagger';
import { TodoCategory } from 'src/domain/model/TodoCategory';
import { CategoryResponse } from 'src/usecase/category/query/getAllCategory/categoryResponse';

export class CategoryPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  todo: TodoCategory[];
  constructor(category: CategoryResponse) {
    this.id = category.id;
    this.name = category.name;
  }
}
