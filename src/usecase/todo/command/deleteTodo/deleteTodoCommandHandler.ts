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
import { DeleteTodoCommand } from './deleteTodoCommand';

@CommandHandler(DeleteTodoCommand)
export class DeleteTodoCommandHandler
  implements ICommandHandler<DeleteTodoCommand>
{
  constructor(
    @Inject(ITODO_REPOSITORY) private readonly todoRepository: ITodoRepository,
    @Inject(IEXCEPTION) private readonly exception: IException,
  ) {}
  async execute(command: DeleteTodoCommand): Promise<any> {
    this.validate(command);
    const { id } = command;
    await this.todoRepository.deleteById(id);
  }
  private validate(deleteTodoCommand: DeleteTodoCommand) {
    const { id } = deleteTodoCommand;
    if (!id || id == 0)
      this.exception.badRequestException({
        message: 'The item id to be deleted must be set',
      });
  }
}
