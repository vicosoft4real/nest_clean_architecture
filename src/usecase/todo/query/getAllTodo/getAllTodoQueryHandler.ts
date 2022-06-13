import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  ITodoRepository,
  ITODO_REPOSITORY,
} from 'src/domain/interface/repository/ITodoRepository';
import { TodoResponse } from '../getTodoResponse';
import { GetAllTodoQuery } from './getAllTodoQuery';

@QueryHandler(GetAllTodoQuery)
export class GetAllTodoQueryHandler
  implements IQueryHandler<GetAllTodoQuery, TodoResponse[]>
{
  constructor(
    @Inject(ITODO_REPOSITORY) private readonly todoRepository: ITodoRepository,
  ) {}
  async execute(_: GetAllTodoQuery): Promise<TodoResponse[]> {
    const todos = await this.todoRepository.findAll();
    return todos?.map(
      (todo) =>
        new TodoResponse(
          todo.getId(),
          todo.getContent(),
          todo.getIsDone(),
          todo.getCreatedDate(),
          {
            id: todo.getCategory()?.getId(),
            name: todo.getCategory().getName(),
          },
        ),
    );
  }
}
