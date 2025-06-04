import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Injectable()
export class AvailableSlotService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.availableSlot.findMany();
  }

  findOne(id: string) {
    return this.prisma.availableSlot.findUnique({ where: { id } });
  }

  create(data: CreateSlotDto) {
    return this.prisma.availableSlot.create({ data });
  }

  update(id: string, data: UpdateSlotDto) {
    return this.prisma.availableSlot.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.availableSlot.delete({ where: { id } });
  }
}
