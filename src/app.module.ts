import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguro } from './seguro/entities/seguro.entity';
import { SeguroModule } from './seguro/seguro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_autoprotec',
      entities: [Seguro],
      synchronize: true,
    }),
    SeguroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
