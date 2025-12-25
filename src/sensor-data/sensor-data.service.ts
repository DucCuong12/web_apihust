import { Injectable } from '@nestjs/common';
import { CreateSensorDatumDto } from './dto/create-sensor-datum.dto';
import { UpdateSensorDatumDto } from './dto/update-sensor-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SensorDatum } from './schemas/sensor-datum.schema';
import { Model } from 'mongoose';

@Injectable()
export class SensorDataService {
  constructor(
    @InjectModel(SensorDatum.name) private sensorDatumModel: Model<SensorDatum>,
  ) {}
  async create(
    createSensorDatumDto: CreateSensorDatumDto,
  ): Promise<SensorDatum> {
    const createdSensorData = new this.sensorDatumModel(createSensorDatumDto);
    return createdSensorData.save();
  }

  async findAll(): Promise<SensorDatum[]> {
    return this.sensorDatumModel.find().exec();
  }

  async findOne(id: string): Promise<SensorDatum | null> {
    return this.sensorDatumModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateSensorDatumDto: UpdateSensorDatumDto,
  ): Promise<SensorDatum | null> {
    return this.sensorDatumModel
      .findByIdAndUpdate({ _id: id }, updateSensorDatumDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<SensorDatum | null> {
    const deletedSensorData = await this.sensorDatumModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedSensorData;
  }
}
