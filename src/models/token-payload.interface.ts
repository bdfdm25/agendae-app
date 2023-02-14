import { RoleEnum } from "@utils/enums/role.enum";

export interface ITokenPayload {
  fullname: string;
  email: string;
  exp: number;
  iat: number;
  role: RoleEnum;
}
