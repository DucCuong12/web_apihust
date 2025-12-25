import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorDataModule } from './sensor-data/sensor-data.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/example?authSource=admin',
    ),
    RouterModule.register([
      {
        path: 'api',
        module: AppModule,
        children: [
          {
            path: 'sensor-data',
            module: SensorDataModule,
          },
          {
            path: 'users',
            module: UsersModule,
          },
        ],
      },
    ]),
    SensorDataModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
