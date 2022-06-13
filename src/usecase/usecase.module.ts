import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ExceptionsModule } from 'src/infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { CategoryCommandHandlers } from './category/command';
import { CategoryQueryHandlers } from './category/query';
import { TodoCommandHandlers } from './todo/command';
import { TodoQueryHandlers } from './todo/query';

@Module({
  imports: [CqrsModule, RepositoriesModule, ExceptionsModule],
  providers: [
    ...TodoQueryHandlers,
    ...TodoCommandHandlers,
    ...CategoryQueryHandlers,
    ...CategoryCommandHandlers,
  ],
})
export class UsecaseModule {}
