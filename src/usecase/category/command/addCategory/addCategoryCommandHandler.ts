import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  IException,
  IEXCEPTION,
} from 'src/domain/interface/exception/IException';
import {
  ICATEGORY_REPOSITORY,
  ICategoryRepsoitory,
} from 'src/domain/interface/repository/ICategoryRepository';
import { TodoCategory } from 'src/domain/model/TodoCategory';
import { AddCategoryCommand } from './addCategoryCommand';

/**
 * handles creating new category
 */
@CommandHandler(AddCategoryCommand)
export class AddCategoryCommandHandler
  implements ICommandHandler<AddCategoryCommand>
{
  constructor(
    @Inject(ICATEGORY_REPOSITORY)
    private readonly categoryRepository: ICategoryRepsoitory,
    @Inject(IEXCEPTION) private readonly exception: IException,
  ) {}

  async execute(command: AddCategoryCommand): Promise<void> {
    this.validate(command);
    const { name } = command;
    await this.categoryRepository.insert(new TodoCategory(name));
  }
  private validate(command: AddCategoryCommand) {
    const { name } = command;
    if (!name || name === '')
      this.exception.badRequestException({
        message: 'Category name is required',
      });
  }
}
