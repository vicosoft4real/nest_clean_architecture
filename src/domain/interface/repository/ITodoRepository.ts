import { TodoTask } from 'src/domain/model/TodoTask';
export const ITODO_REPOSITORY = 'ITodoRepository';
export interface ITodoRepository {
  /**
   * Create new todo
   * @param todo : TodoTask
   * @returns Promise<void>
   */
  insert(todo: TodoTask): Promise<void>;
  /**
   * Get all todo
   * @returns Promise<TodoTask[]>
   */
  findAll(): Promise<TodoTask[]>;
  /**
   * Get todo by id
   * @param id : number
   * @returns Promise<TodoTask>
   */
  findById(id: number): Promise<TodoTask>;
  /**
   *
   * @param id : number
   * @param content : string
   * @param isDone : boolean
   * @param categoryId : number
   * @returns Promise<void>
   */
  updateContent(
    id: number,
    content: string,
    isDone?: boolean,
    categoryId?: number,
  ): Promise<void>;
  /**
   * Delete todo by id
   * @param id : number
   * @returns Promise<void>
   */
  deleteById(id: number): Promise<void>;
  /**
   * get todo by category name
   * @param categoryName : string
   * @returns Promise<TodoTask[]>
   */
  getByCategoryName(categoryName: string): Promise<TodoTask[]>;
}
