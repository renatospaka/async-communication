import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
// import { MicroserviceOptions, Transport } from "@nestjs/microservices";
// eslint-disable-next-line prettier/prettier
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
  // console.log("Chegou aqui 1");

  // const brokerServer = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [
  //       // "amqp://xnfbgxgg:7EhYkk-2a_hsScQWmyyuOlZ33v7U-bjx@wasp.rmq.cloudamqp.com/xnfbgxgg"
  //       "amqp://admin.admin@localhost:5672",
  //     ],
  //     queue: "rabbit-mq-nest-js",
  //     // false = manual acknowledgement; true = automatic acknowledgment
  //     noAck: false,
  //     // Get one by one
  //     prefetchCount: 1,
  //   },
  // });

  // await brokerServer.listen();
  // console.log("Chegou aqui 2");

  // const mqs = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ["amqp://admin:admin@localhost:5672"],
  //       queue: "cats_queue",
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   },
  // );

  // await mqs.listen();
  // console.log("Chegou aqui 3");
}

bootstrap();
