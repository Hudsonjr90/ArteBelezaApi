import { IsString } from 'class-validator';

export class CreateBarberDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;
  
}
