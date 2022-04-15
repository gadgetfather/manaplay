import axios from "axios";
import React, { useState, createContext, useContext, useReducer } from "react";
import { useAuth } from "./auth-context";
import { ToastContainer, toast } from "react-toastify";
import { playlistReducer } from "../reducer/playlistReducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const {
    userInfo: { token },
  } = useAuth();
  const [playlists, playlistsDispatch] = useReducer(playlistReducer, {
    playlistsArr: [],
    singlePlaylist: {},
    showModal: false,
  });
  const getAllPlaylists = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: token },
      });
      playlistsDispatch({
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const createNewPlaylist = async (playlist, video) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: { authorization: token },
        }
      );
      playlistsDispatch({
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteThePlaylist = async (playlistId) => {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    playlistsDispatch({
      type: "ADD_TO_PLAYLISTS",
      payload: response.data.playlists,
    });
  };
  const addVideoToPlaylist = async (playlistId, video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        playlistsDispatch({ type: "UPDATE_PLAYLIST", payload: response });
        toast.success(`Added to ${response.data.playlist.title}`, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const removeVideoFromPlaylist = async (playlistId, videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        playlistsDispatch({ type: "UPDATE_PLAYLIST", payload: response });

        toast.error(`Removed from ${response.data.playlist.title}`, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <PlaylistContext.Provider
      value={{
        getAllPlaylists,
        playlists,
        playlistsDispatch,
        createNewPlaylist,
        deleteThePlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
