import axios from "axios";
import React, { useState, useEffect } from "react";
export const useFetchVideoData = () => {
  const [videos, setvideos] = useState([]);
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/videos");
          const {
            data: { videos },
          } = response;
          setvideos(() => videos);
        } catch (e) {
          console.log(e);
        }
      })(),
    []
  );
  return videos;
};
