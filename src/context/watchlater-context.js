import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const WatchlaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
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
    } catch (error) {}
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
