import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SeguroService } from '../service/service';
import { Seguro } from '../entities/seguro.entity';

@Controller('/seguro')
export class SeguroController {
  constructor(private readonly seguroService: SeguroService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Seguro[]> {
    return this.seguroService.findAll();
  }

  @Get('placa/:placa')
  @HttpCode(HttpStatus.OK)
  findByPlaca(@Param('placa') placa: string): Promise<Seguro> {
    return this.seguroService.findByPlaca(placa);
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Seguro> {
    return this.seguroService.findById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() seguro: Seguro): Promise<Seguro> {
    return this.seguroService.create(seguro);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() seguro: Seguro): Promise<Seguro> {
    return this.seguroService.update(seguro);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.seguroService.delete(id);
  }
}
