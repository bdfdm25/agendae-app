import { IService } from "./service.interface";
import { IProfile } from "./profile.interface";
import { IOpeningHours } from "./opening-hours.interface";

export interface IOnboarding {
  profile: IProfile;
  openingHours: IOpeningHours;
  services: IService[];
}
