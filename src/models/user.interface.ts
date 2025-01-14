export interface IUser {
  id?: string;
  fullname: string;
  email: string;
  role: string;
  profileUpdated?: boolean;
  password?: string;
}
