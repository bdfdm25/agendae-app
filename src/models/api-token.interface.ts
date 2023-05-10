import { AxiosResponse } from "axios";

export interface IApiToken extends AxiosResponse {
  data: {
    accessToken: string;
  };
}
