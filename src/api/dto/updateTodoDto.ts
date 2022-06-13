import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsBoolean, IsString } from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsBoolean()
  readonly isDone: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @ApiProperty()
  @IsNumber()
  readonly categoryId: number;
}
