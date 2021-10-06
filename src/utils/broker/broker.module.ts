import { Module } from "@nestjs/common";
import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { BrokerService } from "./broker.service";

/*
documentation based on: 
https://github.com/golevelup/nestjs/tree/master/packages/rabbitmq#sending-messages
*/

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: "to-app2",
          type: "direct",
        },
      ],
      // uri: process.env.RABBITMQ_URI,
      uri: "amqp://admin:admin@localhost:5672",
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [BrokerService],
  exports: [BrokerService],
})
export class BrokerModule {}
