import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({ token: "", user: {} });
  const [num, setNum] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("Manaplay.encodedToken");
    const user = JSON.parse(localStorage.getItem("Manaplay.User"));
    if (token || user) {
      setUserInfo({ ...userInfo, token: token, user: user });
    } else {
      setUserInfo({ ...userInfo, token: "", user: {} });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status === 200) {
        setTimeout(() => {
          navigate(location?.state?.from?.pathname || -1, { replace: true });
        }, 2000);
        localStorage.setItem(
          "Manaplay.encodedToken",
          response.data.encodedToken
        );
        localStorage.setItem(
          "Manaplay.User",
          JSON.stringify(response.data.foundUser)
        );
        setUserInfo({
          ...userInfo,
          user: response.data.foundUser,
          token: response.data.encodedToken,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async (email, password, firstName) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
      });
      if (response.status === 201) {
        setTimeout(() => {
          navigate(location?.state?.from?.pathname || "/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ userInfo, login, signup, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
