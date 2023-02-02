import { IClient } from "@models/client.interface";
import { IServiceProvider } from "@models/service-provider.interface";
import { ISignup } from "@models/signup.interface";
import { Routes } from "@navigation/routes.helper";
import { signup } from "@services/auth.service";
import { useState } from "react";
import { SignupView } from "./SignupView";

export default function Signup({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);

    function signinHandler() {
        navigation.navigate("Signin");
    }

    async function signupHandler(signupData: ISignup) {
        setIsLoading(true);
        if (signupData.serviceProvider) {
            const serviceProvider: IServiceProvider = {
                name: signupData.fullname,
                email: signupData.email,
                password: signupData.password,
            };
            await signup(Routes.REGISTER_SERVICE_PROVIDER, serviceProvider);
            setIsLoading(false);
        }

        if (signupData.client) {
            const client: IClient = {
                name: signupData.fullname,
                email: signupData.email,
                password: signupData.password,
            };
            await signup(Routes.REGISTER_CLIENT, client);
            setIsLoading(false);
        }

        navigation.navigate("Signin");
    }

    return <SignupView signinHandler={signinHandler} signupHandler={signupHandler} loading={isLoading} />;
}
