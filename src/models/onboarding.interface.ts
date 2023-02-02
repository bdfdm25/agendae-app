import { INewService } from "./new-service.interface";
import { IProfile } from "./profile.interface";
import { IScheduleConfig } from "./schedule-config.interface";

export interface IOnboarding {
  profile: IProfile;
  scheduleConfig: IScheduleConfig;
  newService: INewService;
}
