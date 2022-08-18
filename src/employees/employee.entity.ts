import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}