import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICATEGORY_REPOSITORY } from 'src/domain/interface/repository/ICategoryRepository';
import { ITODO_REPOSITORY } from 'src/domain/interface/repository/ITodoRepository';
import { Category } from '../enity/category.entity';
import { Todo } from '../enity/todo.entity';
import { CategoryRepository } from './category.repossitory';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Category])],
  providers: [
    {
      provide: ITODO_REPOSITORY,
      useClass: TodoRepository,
    },
    {
      provide: ICATEGORY_REPOSITORY,
      useClass: CategoryRepository,
    },
  ],
  exports: [ITODO_REPOSITORY, ICATEGORY_REPOSITORY],
})
export class RepositoriesModule {}
