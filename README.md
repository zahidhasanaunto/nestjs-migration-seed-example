
```
## Database Migrations & Seeds

This boilerplate uses [TypeORM](https://github.com/typeorm/typeorm) with Data Mapper pattern. PostgreSQL is used as the database type.

First create a ormconfig file which is located at the root. Its not dependent on original typeorm connection of the application. 

## Migrations

Some sample migration tables are already generated in `src/app/database/migrations` directory.

You can create other migration files with running the following command:

```sh
$ npm run migration:create CreateBookTable

```
Run migrations after creating or generating:

```
$ npm run migration:run
```

## Seeds

To create some fake records for your table, please follow the sample seeder & factory which are already generated in `src/app/database/seeds` and `src/app/database/factories`.

```
$ npm run seed:run
```