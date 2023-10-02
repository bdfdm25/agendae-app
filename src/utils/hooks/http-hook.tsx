import { BASE_URL } from "@navigation/routes.helper";
import { AuthContext } from "@screens/Auth/context/authentication-context";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useContext } from "react";

const http = axios.create({
  baseURL: BASE_URL,
});
export function useHttp() {
  const authCtx = useContext(AuthContext);

  async function fetchData(
    httpParams: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    if (authCtx.token) {
      http.interceptors.request.use((request) => {
        request.headers["Authorization"] = `Bearer ${authCtx.token}`;
        return request;
      });
    }

    return await http.request({ ...httpParams });
  }

  return { fetchData: fetchData };
}

// .then((res) => {
//     console.info(res.data);
// })
// .catch((error) => {
//     if (error.response) {
//         console.log(error.response.data);
//     } else if (error.request) {
//         console.log(error.request);
//     } else {
//         console.log("Error", error.message);
//     }
// });
