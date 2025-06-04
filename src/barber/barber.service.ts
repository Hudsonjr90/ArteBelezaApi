import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';

@Injectable()
export class BarberService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.barber.findMany();
  }

  findOne(id: string) {
    return this.prisma.barber.findUnique({ where: { id } });
  }

  create(data: CreateBarberDto) {
    return this.prisma.barber.create({ data });
  }

  update(id: string, data: UpdateBarberDto) {
    return this.prisma.barber.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.barber.delete({ where: { id } });
  }
}
