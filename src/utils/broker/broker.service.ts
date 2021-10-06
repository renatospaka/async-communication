import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BrokerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(exchange: string, bindingKey: string, payload: any) {
    return await this.amqpConnection.publish(exchange, bindingKey, payload);
  }
}
