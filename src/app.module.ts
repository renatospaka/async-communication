import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BrokerModule } from "./utils/broker/broker.module";
import { ReaderService } from "./reader/reader.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BrokerModule,
  ],
  controllers: [AppController],
  providers: [AppService, ReaderService],
})
export class AppModule {}
