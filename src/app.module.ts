import { Module } from "@nestjs/common";
// import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BrokerModule } from "./utils/broker/broker.module";
// // import { PurchaseModule } from "./purchase/purchase.module";
// // import { BrokerRabbitMqModule } from "./broker-rabbit-mq/broker-rabbit-mq.module";

@Module({
  // imports: [BrokerModule],
  imports: [
    BrokerModule,
    // RabbitMQModule.forRootAsync(RabbitMQModule, {
    //   useFactory: () => ({
    //     uri: process.env.RABBITMQ_URI,
    //   }),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
