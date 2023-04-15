import React, { createContext, useContext } from "react";
import axios, { AxiosResponse } from "axios";
import { AuthContext } from "./authentication-context";

const http = axios.create();

export const HttpContext = createContext({
  get: (url: string, config?: any): Promise<AxiosResponse> => {
    return http.get(url, config);
  },
  post: (url: string, data?: any, config?: any): Promise<AxiosResponse> => {
    return http.post(url, data, config);
  },
});

function HttpContextProvider({ children }) {
  const authCtx = useContext(AuthContext);

  async function get(url: string, config?: any): Promise<AxiosResponse> {
    return await http.get(url, config);
  }

  async function post(
    url: string,
    data?: any,
    config?: any
  ): Promise<AxiosResponse> {
    if (config) {
      http.interceptors.request.use(config);
    }

    return await http.post(url, data, config);
  }

  const value = {
    get: get,
    post: post,
  };

  return <HttpContext.Provider value={value}>{children}</HttpContext.Provider>;
}

export default HttpContextProvider;
