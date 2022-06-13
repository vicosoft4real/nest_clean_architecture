export class UpdateTodoCommand {
  constructor(
    public id: number,
    public content: string,
    public isDone?: boolean,
    public categoryId?: number,
  ) {}
}
