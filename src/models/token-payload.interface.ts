import { RoleEnum } from "@utils/enums/role.enum";

export interface ITokenPayload {
  id: string;
  fullname: string;
  email: string;
  exp: number;
  iat: number;
  role: RoleEnum;
  profileUpdated: boolean;
}
