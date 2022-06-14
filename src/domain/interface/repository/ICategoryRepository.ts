import { TodoCategory } from 'src/domain/model/TodoCategory';
export const ICATEGORY_REPOSITORY = 'ICategoryRepsoitory';
export interface ICategoryRepsoitory {
  /**
   *
   * @param name : string
   * @returns Promise<TodoCategory>
   */
  getByName(name: string): Promise<TodoCategory>;
  /**
   * create new category
   * @param category : TodoCategory
   * @returns Promise<void>
   */
  insert(category: TodoCategory): Promise<void>;
  /**
   * Delete category by id
   * @param id : number
   * @returns Promise<void>
   */
  remove(id: number): Promise<void>;
  /**
   * Get category by id
   * @param id : number
   */
  getById(id: number): Promise<TodoCategory>;
  /**
   * Get all category
   * @returns Promise<TodoCategory[]>
   */
  getAll(): Promise<TodoCategory[]>;
  /**
   * Get all category with todo
   * @returns Promise<TodoCategory[]>
   */
  getAllWithTodo(): Promise<TodoCategory[]>;
}
