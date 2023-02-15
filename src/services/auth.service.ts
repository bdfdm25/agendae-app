import { IApiToken } from "@models/api-token.interface";
import { ISignin } from "@models/signin.interface";
import { IUser } from "@models/user.interface";
import { Routes } from "@navigation/routes.helper";
import axios from "axios";

export async function signup(user: IUser): Promise<void> {
  return await axios
    .post(Routes.SIGNUP, user)
    .then((res) => {
      console.info(res.data);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
}

export async function signin(signInData: ISignin): Promise<IApiToken> {
  const response = await axios.post(Routes.SIGNIN, signInData);
  return response.data;
}
