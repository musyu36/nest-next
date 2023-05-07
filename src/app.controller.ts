import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // AppControllerがインスタンス化されるときにAppServiceもIoC Containerの方でインスタンス化され、AppControllerのインスタンスに注入する
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
