import { CategoryTodoPresenter } from './../../presenter/categoryTodoPresenter';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CategoryPresenter } from 'src/api/presenter/categoryPresenter';
import { GetAllCategoryQuery } from 'src/usecase/category/query/getAllCategory/getAllCategoryQuery';
import { AddCategoryDto } from 'src/api/dto/addCategoryDto';
import { AddCategoryCommand } from 'src/usecase/category/command/addCategory/addCategoryCommand';
import { CategoryResponse } from 'src/usecase/category/query/getAllCategory/categoryResponse';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessagePresenter } from 'src/api/presenter/messagePresenter';
import { ApiResponseType } from 'src/api/common/apiResponseDecorator';
import { GetCategoryWithTodoQuery } from 'src/usecase/category/query/getCategoryWithTodo/getCategoryWithTodoQuery';
import { CategoryTodoResponse } from 'src/usecase/category/query/getCategoryWithTodo/CategoryTodoResponse';

@Controller('category')
@ApiTags('category')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(CategoryPresenter, MessagePresenter, CategoryTodoPresenter)
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiResponseType(CategoryPresenter, true)
  async getCategories() {
    const categories = await this.queryBus.execute<
      GetAllCategoryQuery,
      CategoryResponse[]
    >(new GetAllCategoryQuery());
    return categories?.map((category) => new CategoryPresenter(category));
  }
  @Get('todo')
  @ApiResponseType(CategoryTodoPresenter, true)
  async getCategoryTodo() {
    const categories = await this.queryBus.execute<
      GetCategoryWithTodoQuery,
      CategoryTodoResponse[]
    >(new GetCategoryWithTodoQuery());
    return categories?.map((category) => new CategoryTodoPresenter(category));
  }

  @Post()
  @ApiResponseType(MessagePresenter, false)
  async addCategory(@Body() addcategory: AddCategoryDto) {
    const { name } = addcategory;
    await this.commandBus.execute(new AddCategoryCommand(name));
    return { message: 'success' };
  }
}
