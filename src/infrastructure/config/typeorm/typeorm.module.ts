import { Todo } from 'src/infrastructure/enity/todo.entity';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/infrastructure/enity/category.entity';

const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  schema: process.env.DATABASE_SCHEMA,
  entities: [Todo, Category],
  synchronize: true, //demo purpose only
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmModuleOptions),
  ],
})
export class TypeormConfigModule {}
