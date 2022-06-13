import { TodoResponse } from 'src/usecase/todo/query/getTodoResponse';
import {
  ICATEGORY_REPOSITORY,
  ICategoryRepsoitory,
} from 'src/domain/interface/repository/ICategoryRepository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CategoryTodoResponse } from './CategoryTodoResponse';
import { GetCategoryWithTodoQuery } from './getCategoryWithTodoQuery';
import { Inject } from '@nestjs/common';

@QueryHandler(GetCategoryWithTodoQuery)
export class GetCategoryWithTodoQueryHandler
  implements IQueryHandler<GetCategoryWithTodoQuery, CategoryTodoResponse[]>
{
  constructor(
    @Inject(ICATEGORY_REPOSITORY)
    private readonly todoRepository: ICategoryRepsoitory,
  ) {}
  async execute(
    _query: GetCategoryWithTodoQuery,
  ): Promise<CategoryTodoResponse[]> {
    const category = await this.todoRepository.getAllWithTodo();
    const response = category?.map(
      (_q) =>
        new CategoryTodoResponse(
          _q.getId(),
          _q.getName(),
          _q
            .getTodo()
            ?.map(
              (t) =>
                new TodoResponse(
                  t.getId(),
                  t.getContent(),
                  t.getIsDone(),
                  t.getCreatedDate(),
                ),
            ),
        ),
    );
    return response;
  }
}
