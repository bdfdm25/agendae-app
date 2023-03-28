const BASE_URL_DEV =
  "http://agendae-dev-env.eba-qmbcazzx.us-east-1.elasticbeanstalk.com/api";

const BASE_URL_LOCAL = "http://189.61.155.33:3333/api";

export class Routes {
  // Auth
  static REGISTER_CLIENT = `${BASE_URL_DEV}/client`;
  static REGISTER_SERVICE_PROVIDER = `${BASE_URL_DEV}/service-provider/save`;
  static SIGNIN = `${BASE_URL_DEV}/auth/signin`;
  static SIGNUP = `${BASE_URL_DEV}/auth/signup`;
  static VALIDATION_CODE = `${BASE_URL_DEV}/password-recovery/validation-code`;
  static RESET_PASSWORD = `${BASE_URL_DEV}/password-recovery/reset`;
}

// export class Pages {
//     static LOGIN = '/login';
//     static HOME = '/home';
//     static SUMMARY = '/summary';
//     static FINANCE = '/finance';
//     static DASHBOARD = '/dashboard';
//     static SETTINGS = '/settings';
// }
