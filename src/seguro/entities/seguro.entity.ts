import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_seguros')
export class Seguro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: false })
  nomeSegurado!: string;

  @Column({ length: 50, nullable: false })
  modeloCarro!: string;

  @Column({ unique: true })
  placa!: string;

  @Column('decimal')
  valorSeguro!: number;

  @Column({ default: true })
  ativo!: boolean;

  @CreateDateColumn()
  dataCriacao!: Date;
}
