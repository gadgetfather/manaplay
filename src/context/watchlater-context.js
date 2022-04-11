import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const WatchlaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [watchLaterArr, setWatchLaterArr] = useState([]);
  const addToWatchlater = async (video) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setWatchLaterArr(response.data.watchlater);
      }
    } catch (error) {
      toast.error("You need to login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
  };
  const removeFromWatchLater = async (videoId) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        setWatchLaterArr(response.data.watchlater);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WatchlaterContext.Provider
      value={{ addToWatchlater, removeFromWatchLater, watchLaterArr }}
    >
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { useWatchlater, WatchLaterProvider };
