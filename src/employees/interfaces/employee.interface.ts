
import { IsString, IsInt } from 'class-validator';

export class EmployeeDto {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class CreateEmployeeDto {
    @IsString()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}