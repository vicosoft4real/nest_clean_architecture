import { TodoCategory } from './TodoCategory';

/**
 * Todo model
 */
export class TodoTask {
  constructor(
    private content: string,
    private isDone: boolean,
    private category: TodoCategory,
    private id?: number,
    private createdate?: Date,
    private updateddate?: Date,
  ) {
    if (!content || content === '') {
      throw new Error('Content is required'); // this be customized exception
    }
  }

  public getId(): number {
    return this.id;
  }
  public getContent(): string {
    return this.content;
  }
  public getIsDone(): boolean {
    return this.isDone;
  }
  public getCreatedDate(): Date {
    return this.createdate;
  }
  public getUpdatedDate(): Date {
    return this.updateddate;
  }
  public getCategory(): TodoCategory {
    return this.category;
  }
}
