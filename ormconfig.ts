import { config } from 'dotenv';
import * as path from 'path';

config({
  path: path.join(
    process.cwd(),
    'environments',
    `${process.env.NODE_ENV || 'development'}.env`
  ),
});

const {
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
} = process.env;

module.exports = {
  type: TYPEORM_CONNECTION,
  host: TYPEORM_HOST,
  port: +TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  entities: ['src/app/**/*.entity{.ts,.js}'],
  migrations: ['src/app/database/migrations/*{.ts,.js}'],
  factories: ['src/app/database/factories/**/*{.ts,.js}'],
  seeds: ['src/app/database/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/app/database/migrations',
  },
};
