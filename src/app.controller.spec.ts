import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employees/employee.controller';
import { EmployeeService } from './employees/employee.service';

describe('AppController', () => {
  let appController: EmployeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    appController = app.get<EmployeeController>(EmployeeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
