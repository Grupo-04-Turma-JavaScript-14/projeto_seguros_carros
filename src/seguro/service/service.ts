import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
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

  async create(seguro: Seguro): Promise<Seguro> {
    const placaExistente = await this.seguroRepository.findOneBy({
      placa: seguro.placa,
    });
    if (placaExistente) {
      throw new BadRequestException(
        'Já existe um seguro cadastrado para esta placa',
      );
    }
    return this.seguroRepository.save(seguro);
  }

  async update(seguro: Seguro): Promise<Seguro> {
    const seguroExiste = await this.findById(seguro.id);
    const placaExiste = await this.seguroRepository.findOneBy({
      placa: seguro.placa,
    });
    if (placaExiste && placaExiste.id !== seguro.id) {
      throw new BadRequestException('Já existe um seguro com essa placa');
    }
    const seguroAtualizado = this.seguroRepository.merge(seguroExiste, seguro);

    return this.seguroRepository.save(seguroAtualizado);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.seguroRepository.delete(id);
  }
}
