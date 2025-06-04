import { IsString, IsUUID } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  barberId: string;

  @IsUUID()
  slotId: string;

  @IsString()
  serviceType: string;
}
