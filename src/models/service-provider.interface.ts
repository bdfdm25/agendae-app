import { IService } from "./service.interface";
import { IOpeningHours } from "./opening-hours.interface";

export interface IServiceProvider {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  naturalPersonDocument: string;
  legalPersonDocument: string;
  openingHours: IOpeningHours;
  services: IService[];
}
