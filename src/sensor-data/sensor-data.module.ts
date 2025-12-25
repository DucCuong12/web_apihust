import { Module } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { SensorDataController } from './sensor-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorDatum, SensorDataSchema } from './schemas/sensor-datum.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SensorDatum.name,
        schema: SensorDataSchema,
      },
    ]),
  ],
  controllers: [SensorDataController],
  providers: [SensorDataService],
})
export class SensorDataModule {}
