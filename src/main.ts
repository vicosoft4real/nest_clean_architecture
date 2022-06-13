import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseFormat } from './api/common/responseInterceptor';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/filter/AllExceptionFilter';
import { LoggingInterceptor } from './infrastructure/Interceptor/logging/LoggingInterceptor';
import { ResponseInterceptor } from './infrastructure/Interceptor/response/ResponseInterceptor';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  //open api documentation
  const config = new DocumentBuilder()
    .setTitle('Todo App')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('fooji')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [ResponseFormat],
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
