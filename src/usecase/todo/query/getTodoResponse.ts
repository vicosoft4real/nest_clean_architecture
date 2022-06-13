export class TodoResponse {
  constructor(
    public readonly id: number,
    public readonly content: string,
    public readonly isDone: boolean,
    public readonly createdDate?: Date,
    public readonly category?: Category,
  ) {}
}
export interface Category {
  id: number;
  name: string;
}
