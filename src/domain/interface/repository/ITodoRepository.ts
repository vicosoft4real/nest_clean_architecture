import { TodoTask } from 'src/domain/model/TodoTask';
export const ITODO_REPOSITORY = 'ITodoRepository';
export interface ITodoRepository {
  insert(todo: TodoTask): Promise<void>;
  findAll(): Promise<TodoTask[]>;
  findById(id: number): Promise<TodoTask>;
  updateContent(
    id: number,
    content: string,
    isDone?: boolean,
    categoryId?: number,
  ): Promise<void>;
  deleteById(id: number): Promise<void>;
  getByCategoryName(categoryName: string): Promise<TodoTask[]>;
}
