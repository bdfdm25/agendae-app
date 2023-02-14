import { ITokenPayload } from "@models/token-payload.interface";
import { IUser } from "@models/user.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  userInfo: { email: "", fullname: "", role: "" },
  isAuthenticated: false,
  isProfileUpdated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  updateProfile: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUser>();
  const [profileUpdated, setProfileUpdated] = useState(false);

  function authenticate(token: string) {
    const { email, fullname, role } = jwt_decode<ITokenPayload>(token);
    setUserInfo({ email, fullname, role });
    setAuthToken(token);
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
