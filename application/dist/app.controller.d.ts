import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHi(): string;
}
export declare class CatController {
    getCatGreet(name: string): string;
}
