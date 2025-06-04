import { IsDateString, IsUUID } from 'class-validator';

export class CreateSlotDto {
  @IsUUID()
  barberId: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;
}
