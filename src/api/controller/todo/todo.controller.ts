import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiTags, ApiResponse, ApiExtraModels } from '@nestjs/swagger';
import { ApiResponseType } from 'src/api/common/apiResponseDecorator';
import { AddTodoDto } from 'src/api/dto/addTodoDto';
import { UpdateTodoDto } from 'src/api/dto/updateTodoDto';
import { MessagePresenter } from 'src/api/presenter/messagePresenter';
import { TodoPresenter } from 'src/api/presenter/todoPresenter';
import { AddTodoCommand } from 'src/usecase/todo/command/addTodo/addTodoCommand';
import { DeleteTodoCommand } from 'src/usecase/todo/command/deleteTodo/deleteTodoCommand';
import { UpdateTodoCommand } from 'src/usecase/todo/command/updateTodo/updateTodoCommand';
import { GetAllTodoQuery } from 'src/usecase/todo/query/getAllTodo/getAllTodoQuery';
import { GetTodoByIdQuery } from 'src/usecase/todo/query/getAllTodoById/getTodoByIdQuery';
import { TodoResponse } from 'src/usecase/todo/query/getTodoResponse';
/**
 *
 */
@Controller('todo')
@ApiTags('todo')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(TodoPresenter)
export class TodoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  @ApiResponseType(TodoPresenter, false)
  async getTodo(@Param('id', ParseIntPipe) id: number) {
    const todo = await this.queryBus.execute(new GetTodoByIdQuery(id));
    return new TodoPresenter(todo);
  }

  @Get()
  @ApiResponseType(TodoPresenter, true)
  async getTodos() {
    const todos = await this.queryBus.execute<GetAllTodoQuery, TodoResponse[]>(
      new GetAllTodoQuery(),
    );
    return todos?.map((todo) => new TodoPresenter(todo));
  }

  @Put()
  @ApiResponseType(MessagePresenter, false)
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto) {
    const { id, content, isDone, categoryId } = updateTodoDto;
    this.commandBus.execute(
      new UpdateTodoCommand(id, content, isDone, categoryId),
    );
    return { message: 'success' };
  }

  @Delete(':id')
  @ApiResponseType(MessagePresenter, false)
  async deleteTodo(@Param('id', ParseIntPipe) id: number) {
    await this.commandBus.execute(new DeleteTodoCommand(id));
    return { message: 'success' };
  }
  @Post()
  @ApiResponseType(MessagePresenter, false)
  async addTodo(@Body() addTodo: AddTodoDto) {
    const { content, isDone, category } = addTodo;
    await this.commandBus.execute(
      new AddTodoCommand(content, isDone, {
        id: category.id,
        name: category.name,
      }),
    );
    return { message: 'success' };
  }
}
