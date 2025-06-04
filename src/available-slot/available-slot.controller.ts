import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AvailableSlotService } from './available-slot.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Controller('slots')
export class AvailableSlotController {
  constructor(private readonly slotService: AvailableSlotService) {}

  @Get()
  findAll() {
    return this.slotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSlotDto) {
    return this.slotService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSlotDto) {
    return this.slotService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotService.remove(id);
  }
}
