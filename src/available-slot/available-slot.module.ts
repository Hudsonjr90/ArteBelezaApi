import { Module } from '@nestjs/common';
import { AvailableSlotService } from './available-slot.service';
import { AvailableSlotController } from './available-slot.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AvailableSlotController],
  providers: [AvailableSlotService],
})
export class AvailableSlotModule {}
