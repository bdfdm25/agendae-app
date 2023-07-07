export const BASE_URL =
  "http://agendae-dev-env.eba-qpyn4cpf.us-east-1.elasticbeanstalk.com/api";

// const BASE_URL = "http://189.61.155.33:3333/api";

export class Routes {
  // Auth
  static REGISTER_CLIENT = `${BASE_URL}/client`;
  static SIGNIN = "/auth/signin";
  static SIGNUP = `${BASE_URL}/auth/signup`;
  static VALIDATION_CODE = `${BASE_URL}/password-recovery/validation-code`;
  static RESET_PASSWORD = `${BASE_URL}/password-recovery/reset`;

  // SERVICE PROVIDER
  static SAVE_SERVICE_PROVIDER = `${BASE_URL}/service-provider/save`;
  static GET_ADDRESS_BY_CEP = `${BASE_URL}/service-provider/address`;

  // SCHEDULES
  static GET_SCHEDULE_LIST = `${BASE_URL}/schedule/list`;
}

// export class Pages {
//     static LOGIN = '/login';
//     static HOME = '/home';
//     static SUMMARY = '/summary';
//     static FINANCE = '/finance';
//     static DASHBOARD = '/dashboard';
//     static SETTINGS = '/settings';
// }
