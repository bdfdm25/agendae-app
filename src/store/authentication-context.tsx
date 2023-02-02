import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  isProfileUpdate: false,
  authenticate: (token: string) => {},
  logout: () => {},
  updateProfile: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  const [profileUpdated, setProfileUpdated] = useState(true);

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem("access_token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("access_token");
  }

  function updateProfile() {
    setProfileUpdated(true);
  }

  const value = {
    token: authToken,
    isAuthenticated: true,
    isProfileUpdate: profileUpdated,
    authenticate: authenticate,
    logout: logout,
    updateProfile: updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
