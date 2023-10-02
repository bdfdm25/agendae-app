// export const BASE_URL =
//   "http://agendae-dev-env.eba-qpyn4cpf.us-east-1.elasticbeanstalk.com/api";

// Running localhost withg NgRok
export const BASE_URL = "https://upward-beagle-pretty.ngrok-free.app/api";

export class Routes {
  // Auth
  static REGISTER_CLIENT = "/client";
  static SIGNIN = "/auth/signin";
  static SIGNUP = "/auth/signup";
  static VALIDATION_CODE = "/password-recovery/validation-code";
  static RESET_PASSWORD = "/password-recovery/reset";

  // SERVICE PROVIDER
  static SAVE_SERVICE_PROVIDER = "/service-provider/save";
  static GET_ADDRESS_BY_CEP = "/service-provider/address";

  // SCHEDULES
  static GET_SCHEDULE_LIST = "/schedule/list";
}

// export class Pages {
//     static LOGIN = '/login';
//     static HOME = '/home';
//     static SUMMARY = '/summary';
//     static FINANCE = '/finance';
//     static DASHBOARD = '/dashboard';
//     static SETTINGS = '/settings';
// }
