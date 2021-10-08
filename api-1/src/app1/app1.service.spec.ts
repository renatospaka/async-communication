import { Test, TestingModule } from "@nestjs/testing";
import { App1Service } from "./app1.service";

describe("App1Service", () => {
  let service: App1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [App1Service],
    }).compile();

    service = module.get<App1Service>(App1Service);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
