import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const likeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likedArr, setLikedArr] = useState([]);
  const addToLike = async (video) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setLikedArr(response.data.likes);
      }
    } catch (err) {
      toast.error("You need to login", {
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
  const removeFromLike = async (videoId) => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        setLikedArr(response.data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <likeContext.Provider
      value={{ addToLike, removeFromLike, likedArr, setLikedArr }}
    >
      {children}
    </likeContext.Provider>
  );
};

const useLike = () => useContext(likeContext);

export { useLike, LikeProvider };
