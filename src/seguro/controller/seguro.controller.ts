import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
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
}
