import { GetAllTodoQueryHandler } from './getAllTodo/getAllTodoQueryHandler';
import { GetTodoByIdQueryHandler } from './getAllTodoById/getTodoByIdQueryHandler';

export const TodoQueryHandlers = [
  GetAllTodoQueryHandler,
  GetTodoByIdQueryHandler,
];
