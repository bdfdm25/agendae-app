import { IApiToken } from "@models/api-token.interface";
import { ISignin } from "@models/signin.interface";
import { IUser } from "@models/user.interface";
import { Routes } from "@navigation/routes.helper";
import axios from "axios";

export async function signup(url: string, signupData): Promise<IUser> {
    return await axios.post(url, signupData);
}

export async function signin(signInData: ISignin): Promise<IApiToken> {
    const response = await axios.post(Routes.LOGIN, signInData);
    return response.data;
}
