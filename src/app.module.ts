import { Module } from '@nestjs/common';
import { EmployeeModule } from './employees/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Employee } from './employees/employee.entity';


@Module({
  imports: [TypeOrmModule.forRoot()],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [Employee],
        synchronize: true,
      }),
    EmployeeModule
  ],
})
export class AppModule {
constructor(private connection: Connection) {}
}