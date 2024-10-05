  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Language } from './language/entities/language.entity';
  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres', // or your preferred database type
        url: 'localhost:5432', // or your preferred database URL
        username: 'postgres',
        password: '12345',
        database: 'Afrilingo',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Language]),
    ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
