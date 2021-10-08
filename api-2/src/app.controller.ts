import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/to-app1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async commToApp1(@Body() body: Body) {
    const comm: string = await this.appService.toApp1(body);
    console.log(comm);
  }
}
