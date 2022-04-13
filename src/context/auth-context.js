import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
      console.log(response);
      if (response.status === 200) {
        toast.success("You are logged in", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      toast.error(error.response.data.errors[0], {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
