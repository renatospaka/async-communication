import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/to-app2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async commToApp2(@Body() body: Body) {
    const comm: string = await this.appService.toApp2(body);
    // console.log(`Sent ${JSON.stringify(body)}`);
    console.log(comm);
  }
}
