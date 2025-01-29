import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  getDogsGreeting(): string {
    return 'The dogs say woof!';
  }
}
