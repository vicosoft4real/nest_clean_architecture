import { ApiProperty } from '@nestjs/swagger';

export class MessagePresenter {
  @ApiProperty()
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}
