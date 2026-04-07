import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seguro } from '../entities/seguro.entity';

@Injectable()
export class SeguroService {
  constructor(
    @InjectRepository(Seguro)
    private readonly seguroRepository: Repository<Seguro>,
  ) {}

  async findAll(): Promise<Seguro[]> {
    return this.seguroRepository.find();
  }

  async findById(id: number): Promise<Seguro> {
    const seguro = await this.seguroRepository.findOne({
      where: { id },
    });

    if (!seguro) {
      throw new NotFoundException('Seguro não encontrado');
    }

    return seguro;
  }

  async findByPlaca(placa: string): Promise<Seguro> {
    const seguro = await this.seguroRepository.findOneBy({
      placa,
    });

    if (!seguro) {
      throw new NotFoundException('Seguro não encontrado para esta placa');
    }

    return seguro;
  }
}
