import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/to-app2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  commToApp2(@Body() body: Body) {
    this.appService.toApp2(body);
  }
}
