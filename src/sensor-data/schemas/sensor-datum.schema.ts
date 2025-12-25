import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SensorDataDocument = HydratedDocument<SensorDatum>;

@Schema()
export class SensorDatum {
  @Prop()
  sensorName: string;
  @Prop()
  sensorValue: number;
}

export const SensorDataSchema = SchemaFactory.createForClass(SensorDatum);
