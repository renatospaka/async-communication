import { Injectable } from "@nestjs/common";
import { BrokerService } from "./utils/broker/broker.service";
// import { BrokerRabbitMqService } from "./broker-rabbit-mq/broker-rabbit-mq.service";

@Injectable()
export class AppService {
  constructor(private readonly brokerRabbit: BrokerService) {}

  async toApp2(payload: any) {
    const exchange = "to-app2";
    const bindingKey = "just-go";

    await this.brokerRabbit.publishMessage(exchange, bindingKey, payload);
    return `Message ${JSON.stringify(payload)} sent to the app2!`;
  }
}
