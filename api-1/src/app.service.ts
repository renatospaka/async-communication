import { Injectable } from "@nestjs/common";
import { BrokerService } from "./utils/broker/broker.service";

@Injectable()
export class AppService {
  constructor(private readonly brokerRabbit: BrokerService) {}

  async toApp2(payload: any) {
    const exchange = process.env.APP1_TO_EXCHANGE_NAME;
    const bindingKey = process.env.APP1_TO_ROUTING_KEY;

    await this.brokerRabbit.publishMessage(exchange, bindingKey, payload);
    return `Message ${JSON.stringify(payload)} sent to the app2!`;
  }

  // async fromApp2(payload: any) {
  //   const exchange = process.env.APP2_FROM_EXCHANGE_NAME;
  //   const bindingKey = process.env.APP2_FROM_ROUTING_KEY;

  //   await this.brokerRabbit.publishMessage(exchange, bindingKey, payload);
  //   return `Message ${JSON.stringify(payload)} sent from app2!`;
  // }

  doSomeCrazyStuff(originalMessage?: string) {
    // console.log(originalMessage);
  }
}
