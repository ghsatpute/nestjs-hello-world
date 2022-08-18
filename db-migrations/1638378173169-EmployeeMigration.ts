import {MigrationInterface, QueryRunner} from "typeorm";

export class EmployeeMigration1638378173169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE employee (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,

                PRIMARY KEY ( id )
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE employee
        `);
    }

}
