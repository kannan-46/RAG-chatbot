import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RagModule } from './rag/rag.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- Add for .env file support
    RagModule, // <-- This is the only feature module we need here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
