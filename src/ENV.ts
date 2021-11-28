import { config } from 'dotenv';
import * as path from 'path';

config({
  path: path.join(
    process.cwd(),
    'environments',
    `${process.env.NODE_ENV || 'development'}.env`
  ),
});

export const ENV_DEVELOPMENT = 'development';
export const ENV_PRODUCTION = 'production';
export const ENV_STAGING = 'staging';

export const ENV = {
  port: +process.env.PORT,
  env: process.env.NODE_ENV || ENV_DEVELOPMENT,
  isProduction: process.env.NODE_ENV === ENV_PRODUCTION,
  isStaging: process.env.NODE_ENV === ENV_STAGING,
  isDevelopment: process.env.NODE_ENV === ENV_DEVELOPMENT,

  TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION as any,
  TYPEORM_HOST: process.env.TYPEORM_HOST,
  TYPEORM_PORT: Number(process.env.TYPEORM_PORT),
  TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
  TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
  TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE as any,
  TYPEORM_LOGGING: process.env.TYPEORM_LOGGING as any,
  TYPEORM_AUTOLOAD_ENTITIES: process.env.TYPEORM_AUTOLOAD_ENTITIES as any,

};
