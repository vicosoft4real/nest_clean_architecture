import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { ApiModule } from './api/api.module';
import { UsecaseModule } from './usecase/usecase.module';
import { TypeormConfigModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [
    LoggerModule,
    ExceptionsModule,
    ApiModule,
    UsecaseModule,
    TypeormConfigModule,
    RepositoriesModule,
  ],
})
export class AppModule {}
