import { Routes } from "@navigation/routes.helper";
import { HTTPMethod } from "@utils/enums/http-method.enum";
import { useHttp } from "@utils/hooks/http-hook";
import { ISignin } from "../models/signin.interface";
import { IUser } from "../models/user.interface";
import { IResetPassword } from "../models/reset-password.interface";

export function useAuth() {
  const { fetchData } = useHttp();

  async function signin(data: ISignin): Promise<string> {
    const response = await fetchData({
      method: HTTPMethod.POST,
      url: Routes.SIGNIN,
      data,
    });

    return response.data.accessToken;
  }

  async function signup(data: IUser): Promise<void> {
    await fetchData({
      method: HTTPMethod.POST,
      url: Routes.SIGNUP,
      data,
    });
  }

  async function sendCode(data: string): Promise<void> {
    await fetchData({
      method: HTTPMethod.POST,
      url: Routes.VALIDATION_CODE,
      data,
    });
  }

  async function resetPassword(data: IResetPassword): Promise<void> {
    await fetchData({
      method: HTTPMethod.POST,
      url: Routes.RESET_PASSWORD,
      data,
    });
  }

  return { signin, signup, sendCode, resetPassword };
}
