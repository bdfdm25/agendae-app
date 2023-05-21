import { IClient } from "./client.interface";
import { IService } from "./service.interface";

export interface ISchedule {
  id: string;
  service: IService;
  client: IClient;
  serviceProvider: string;
  date: string;
  hour: string;
  status: string;
}
