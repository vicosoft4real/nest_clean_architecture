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
import { UpdateTodoCommand } from './updateTodoCommand';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoCommandHandler
  implements ICommandHandler<UpdateTodoCommand>
{
  constructor(
    @Inject(ITODO_REPOSITORY) private readonly todoRepository: ITodoRepository,
    @Inject(IEXCEPTION) private readonly exception: IException,
  ) {}
  async execute(command: UpdateTodoCommand): Promise<any> {
    this.validate(command);
    const { id, isDone, content, categoryId } = command;
    this.todoRepository.updateContent(id, content, isDone, categoryId);
  }
  /**
   * Validate the rquest
   * @param updateCommand {UpdateTodoCommand}
   */
  private validate(updateCommand: UpdateTodoCommand) {
    const { id, content, categoryId } = updateCommand;
    if (!id)
      this.exception.badRequestException({ message: 'The id is required' });
    if (!content || content === '')
      this.exception.badRequestException({
        message: 'The content cannot be empty',
      });
    if (categoryId <= 0)
      this.exception.badRequestException({
        message: 'The category id is not valid',
      });
  }
}
