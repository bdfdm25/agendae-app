import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";
import { ITokenPayload } from "../models/token-payload.interface";

export const AuthContext = createContext({
  token: "",
  userInfo: {
    id: "",
    email: "",
    fullname: "",
    role: "",
    serviceProviderId: "",
  },
  isAuthenticated: false,
  isProfileUpdated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  updateProfile: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    fullname: "",
    role: "",
    serviceProviderId: "",
  });
  const [profileUpdated, setProfileUpdated] = useState(false);

  function authenticate(token: string) {
    const { id, email, fullname, role, profileUpdated, serviceProviderId } =
      jwt_decode<ITokenPayload>(token);
    setUserInfo({ id, email, fullname, role, serviceProviderId });
    setAuthToken(token);
    setProfileUpdated(profileUpdated);
    AsyncStorage.setItem("accessToken", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("accessToken");
  }

  function updateProfile() {
    setProfileUpdated(true);
  }

  const value = {
    token: authToken,
    userInfo: userInfo,
    isAuthenticated: !!authToken,
    isProfileUpdated: profileUpdated,
    authenticate: authenticate,
    logout: logout,
    updateProfile: updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
