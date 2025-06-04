import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BarberService } from './barber.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';

@Controller('barbers')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Get()
  findAll() {
    return this.barberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barberService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateBarberDto) {
    return this.barberService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBarberDto) {
    return this.barberService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barberService.remove(id);
  }
}
