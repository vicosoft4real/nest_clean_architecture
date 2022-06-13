import { TodoResponse } from 'src/usecase/todo/query/getTodoResponse';

export class CategoryTodoResponse {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly todos?: TodoResponse[],
  ) {}
}
