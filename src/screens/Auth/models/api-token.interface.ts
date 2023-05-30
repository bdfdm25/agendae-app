import { AxiosResponse } from "axios";

export interface IApiToken extends AxiosResponse {
  accessToken: string;
}
