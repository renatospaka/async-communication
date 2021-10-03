import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({ message: "This is APP 1" });
  }
}
