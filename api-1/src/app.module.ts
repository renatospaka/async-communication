import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BrokerModule } from "./utils/broker/broker.module";
import { App1Service } from "./app1/app1.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BrokerModule,
  ],
  controllers: [AppController],
  providers: [AppService, App1Service],
})
export class AppModule {}
