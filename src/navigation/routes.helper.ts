const BASE_URL =
  "http://agendae-env.eba-3rzad6u2.us-east-1.elasticbeanstalk.com/api";

export class Routes {
  // Auth
  static REGISTER_CLIENT = `${BASE_URL}/client`;
  static REGISTER_SERVICE_PROVIDER = `${BASE_URL}/service-provider`;
  static SIGNIN = `${BASE_URL}/auth/signin`;
  static SIGNUP = `${BASE_URL}/auth/signup`;
}

// export class Pages {
//     static LOGIN = '/login';
//     static HOME = '/home';
//     static SUMMARY = '/summary';
//     static FINANCE = '/finance';
//     static DASHBOARD = '/dashboard';
//     static SETTINGS = '/settings';
// }