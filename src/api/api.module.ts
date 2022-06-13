import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TodoController } from './controller/todo/todo.controller';
import { CategoryController } from './controller/category/category.controller';

@Module({
  controllers: [TodoController, CategoryController],
  imports: [CqrsModule],
})
export class ApiModule {}
