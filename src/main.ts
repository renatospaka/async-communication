import { NestFactory } from "@nestjs/core";
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
  // console.log("Chegou aqui 2");
}

bootstrap();
