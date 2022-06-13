import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  IException,
  IEXCEPTION,
} from 'src/domain/interface/exception/IException';
import {
  ITodoRepository,
  ITODO_REPOSITORY,
} from 'src/domain/interface/repository/ITodoRepository';
import { TodoCategory } from 'src/domain/model/TodoCategory';
import { TodoTask } from 'src/domain/model/TodoTask';
import { AddTodoCommand } from './addTodoCommand';
/**
 * Handles creation of new todo
 */
@CommandHandler(AddTodoCommand)
export class AddTodoCommandHandler implements ICommandHandler<AddTodoCommand> {
  constructor(
    @Inject(ITODO_REPOSITORY) private readonly todoRepository: ITodoRepository,
    @Inject(IEXCEPTION) private readonly exception: IException,
  ) {}

  async execute(command: AddTodoCommand): Promise<any> {
    this.validate(command);
    const { content, isDone, category } = command;
    await this.todoRepository.insert(
      new TodoTask(
        content,
        isDone,
        new TodoCategory(category.name, category.id),
      ),
    );
  }

  private validate(command: AddTodoCommand): void {
    const { content, category } = command;
    if (!content)
      this.exception.badRequestException({
        message: 'The content is required',
      });
    if (!category && !category.id)
      this.exception.badRequestException({
        message: 'The Todo category is required',
      });
  }
}
