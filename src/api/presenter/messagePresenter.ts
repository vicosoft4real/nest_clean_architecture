import { ApiProperty } from '@nestjs/swagger';

export class MessagePresenter {
  @ApiProperty()
  message: string;
}
