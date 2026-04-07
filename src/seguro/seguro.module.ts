import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguro } from './entities/seguro.entity';
import { SeguroController } from './controller/seguro.controller';
import { SeguroService } from './service/service';

@Module({
  imports: [TypeOrmModule.forFeature([Seguro])],
  controllers: [SeguroController],
  providers: [SeguroService],
  exports: [TypeOrmModule],
})
export class SeguroModule {}
