import axios from "axios";
import React, { useState, useEffect } from "react";
export const useFetchVideoData = () => {
  const [videos, setvideos] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(
    () =>
      (async () => {
        try {
          setLoader(true);
          const response = await axios.get("/api/videos");
          setLoader(false);
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
  return { videos, loader, setvideos };
};
