import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Import TypeOrmModule
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { Language } from './entities/language.entity';  // Import the entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Language]),  // Register the Language entity
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
