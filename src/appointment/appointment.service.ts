import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.appointment.findMany({
      include: { user: true, barber: true, slot: true },
    });
  }

  findOne(id: string) {
    return this.prisma.appointment.findUnique({
      where: { id },
      include: { user: true, barber: true, slot: true },
    });
  }

  create(data: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data });
  }

  update(id: string, data: UpdateAppointmentDto) {
    return this.prisma.appointment.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
