import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './common/validation.pipe';
import { EmployeeModule } from './employees/employee.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployeeModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
