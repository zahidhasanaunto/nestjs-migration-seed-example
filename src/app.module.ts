import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENV } from './ENV';
console.log(__dirname);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: ENV.TYPEORM_CONNECTION,
      host: ENV.TYPEORM_HOST,
      port: ENV.TYPEORM_PORT,
      username: ENV.TYPEORM_USERNAME,
      password: ENV.TYPEORM_PASSWORD,
      database: ENV.TYPEORM_DATABASE,
      autoLoadEntities: ENV.TYPEORM_AUTOLOAD_ENTITIES,
      synchronize: ENV.TYPEORM_SYNCHRONIZE,
      logging: ENV.TYPEORM_LOGGING,
    } as any),
  ],
})
export class AppModule {}
