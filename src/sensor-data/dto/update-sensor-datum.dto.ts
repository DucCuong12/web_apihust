import { PartialType } from '@nestjs/swagger';
import { CreateSensorDatumDto } from './create-sensor-datum.dto';

export class UpdateSensorDatumDto extends PartialType(CreateSensorDatumDto) {}
