

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Things to try 
[x] Data validation (https://docs.nestjs.com/pipes#class-validator) 
   More to learn https://github.com/typestack/class-validator#usage 

[ ] Configuration management 

[ ] Unit tests 

[x] Database integration
    * `npm install -g ts-node`

[x] Database migration
    * `npm i -g typeorm`
    * To run migrations 
        1. Compile TypeScript files to JavaScript 
            `npm run build`
        1. Run the migrations 
            `npm run typeorm -- migration:run` 

[ ] Entity to DTO mapping 

[ ] Logging 

[ ] Exception handling (https://docs.nestjs.com/exception-filters)

[ ] Enable CORS 

[ ] Getting header from a request 

[ ] Authorization interceptor (https://docs.nestjs.com/guards)

[ ] Correlation IDs for log tracing 
