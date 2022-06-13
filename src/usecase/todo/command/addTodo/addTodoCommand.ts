export class AddTodoCommand {
  constructor(
    public content: string,
    public isDone: boolean,
    public category: Category,
  ) {}
}
export interface Category {
  id: number;
  name: string;
}
