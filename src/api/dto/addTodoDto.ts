import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { CategoryDto } from './categprydto';

export class AddTodoDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  isDone?: boolean;

  @ApiProperty({ required: true })
  @IsObject()
  readonly category: CategoryDto;
}
