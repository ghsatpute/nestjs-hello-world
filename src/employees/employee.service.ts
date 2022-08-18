import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto, EmployeeDto } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
      ) {}

      
  getEmployees() {
    return this.employeeRepository.find();
  }

  getEmployee(id: number) {
    return this.employeeRepository.findOne(id);
  }

  createEmployee(createEmploeeDto: CreateEmployeeDto): EmployeeDto {
    throw new Error('Method not implemented.');
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
