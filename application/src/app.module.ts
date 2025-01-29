import { Module } from '@nestjs/common';
import { AppController, CatController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, DogsController],
  providers: [AppService],
})
export class AppModule {}
