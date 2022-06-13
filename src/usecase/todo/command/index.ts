import { AddTodoCommandHandler } from './addTodo/addTodoCommandHandler';
import { DeleteTodoCommandHandler } from './deleteTodo/deleteTodoCommandHandler';
import { UpdateTodoCommandHandler } from './updateTodo/updateTodoCommandHandler';

export const TodoCommandHandlers = [
  UpdateTodoCommandHandler,
  AddTodoCommandHandler,
  DeleteTodoCommandHandler,
];
