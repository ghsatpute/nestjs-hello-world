import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

import { CreateEmployeeDto, EmployeeDto } from './interfaces/employee.interface';

@Controller()
export class EmployeeController {
  constructor(private readonly appService: EmployeeService) {}

  @Get()
  // TODO: Change the return type
  getEmployees(): any {
    return this.appService.getEmployees();
  }

  @Post()
  createEmployee(@Body() createEmploeeDto: CreateEmployeeDto): EmployeeDto {
      return this.appService.createEmployee(createEmploeeDto);
  }
}
