import { TodoCategory } from 'src/domain/model/TodoCategory';
export const ICATEGORY_REPOSITORY = 'ICategoryRepsoitory';
export interface ICategoryRepsoitory {
  getByName(name: string): Promise<TodoCategory>;
  insert(category: TodoCategory): Promise<void>;
  remove(id: number): Promise<void>;
  getById(id: number): Promise<TodoCategory>;
  getAll(): Promise<TodoCategory[]>;
  getAllWithTodo(): Promise<TodoCategory[]>;
}
