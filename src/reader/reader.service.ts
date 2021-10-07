import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";
import { AppService } from "src/app.service";

let counter = 0;

@Injectable()
export class ReaderService {
  constructor(private appService: AppService) {}

  @RabbitSubscribe({
    exchange: process.env.APP1_FROM_EXCHANGE_NAME,
    routingKey: process.env.APP1_FROM_ROUTING_KEY,
    queue: process.env.APP1_FROM_QUEUE,
  })
  public async receiveFromApp2(data: any) {
    const payload = await JSON.stringify(data);
    counter++;
    console.log(payload, counter);

    this.appService.doSomeCrazyStuff(payload);
  }
}
