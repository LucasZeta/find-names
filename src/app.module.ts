import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindNamesService } from './findnames.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FindNamesService],
})
export class AppModule {}
