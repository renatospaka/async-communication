import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { BrokerService } from "./broker.service";

/*
documentation based on: 
https://github.com/golevelup/nestjs/tree/master/packages/rabbitmq#sending-messages
*/

@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: "to-app2",
          type: "direct",
        },
      ],
      uri: process.env.RABBITMQ_URI,
      // uri: "amqp://admin:admin@localhost:5672",
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [BrokerService],
  exports: [BrokerService],
})
export class BrokerModule {}
