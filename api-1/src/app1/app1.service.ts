import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";
import { AppService } from "src/app.service";

let counter = 0;

@Injectable()
export class App1Service {
  constructor(private appService: AppService) {}

  @RabbitSubscribe({
    exchange: process.env.APP2_TO_EXCHANGE_NAME,
    routingKey: process.env.APP2_TO_ROUTING_KEY,
    queue: process.env.APP2_TO_QUEUE,
  })
  public async receiveFromApp2(data: any) {
    const payload = await JSON.stringify(data);
    counter++;
    console.log(payload, counter);

    this.appService.doSomeCrazyStuff(payload);
  }
}
