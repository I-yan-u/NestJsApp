import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }
}

@Controller('/cats')
export class CatController {
  @Get()
  getCatGreet(name: string): string {
    return `All the cats are greeting you, ${name}`;
  }
}
