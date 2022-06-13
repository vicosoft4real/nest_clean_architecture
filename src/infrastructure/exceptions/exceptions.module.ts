import { Module } from '@nestjs/common';
import { IEXCEPTION } from 'src/domain/interface/exception/IException';
import { ExceptionsService } from './exceptions.service';

@Module({
  providers: [
    {
      provide: IEXCEPTION,
      useClass: ExceptionsService,
    },
  ],
  exports: [IEXCEPTION],
})
export class ExceptionsModule {}
