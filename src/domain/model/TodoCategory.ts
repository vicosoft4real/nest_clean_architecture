import { TodoTask } from './TodoTask';

/**
 * Categoey model
 */
export class TodoCategory {
  constructor(
    private name: string,
    private id?: number,
    private todo?: TodoTask[],
  ) {}

  public getName(): string {
    return this.name;
  }

  public getId(): number | null {
    return this.id;
  }

  public getTodo(): TodoTask[] | null {
    return this.todo;
  }
}
