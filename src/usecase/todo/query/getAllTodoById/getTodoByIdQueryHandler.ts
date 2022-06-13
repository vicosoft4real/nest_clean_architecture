import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  ITodoRepository,
  ITODO_REPOSITORY,
} from 'src/domain/interface/repository/ITodoRepository';
import { TodoResponse } from '../getTodoResponse';
import { GetTodoByIdQuery } from './getTodoByIdQuery';

@QueryHandler(GetTodoByIdQuery)
export class GetTodoByIdQueryHandler
  implements IQueryHandler<GetTodoByIdQuery, TodoResponse>
{
  constructor(
    @Inject(ITODO_REPOSITORY) private readonly todoRepository: ITodoRepository,
  ) {}
  async execute(query: GetTodoByIdQuery): Promise<TodoResponse> {
    const { id } = query;
    const todo = await this.todoRepository.findById(id);
    if (todo) return;
    new TodoResponse(
      todo.getId(),
      todo.getContent(),
      todo.getIsDone(),
      todo.getCreatedDate(),
      { id: todo.getCategory()?.getId(), name: todo.getCategory()?.getName() },
    );
    return null;
  }
}
