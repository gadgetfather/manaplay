import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyArr, setHistoryArr] = useState([]);
  const addToHistory = async (video) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.post(
        "/api/user/history",
        { video },
        { headers: { authorization: encodedToken } }
      );
      console.log(response);
      if (response.status === 201) {
        setHistoryArr(response.data.history);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromHistory = async (videoId) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: { authorization: encodedToken },
      });
      setHistoryArr(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HistoryContext.Provider
      value={{ historyArr, addToHistory, removeFromHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
