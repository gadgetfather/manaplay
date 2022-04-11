import axios from "axios";
import React, { useEffect, useState } from "react";
import { LikedCard } from "../../components";
import * as styles from "./LikedPage.module.css";
export function LikedPage() {
  const [likedVideos, setLikedVideos] = useState([]);
  const getLikedVideos = async () => {
    try {
      const encodedToken = localStorage.getItem("Manaplay.encodedToken");
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: encodedToken },
      });

      setLikedVideos(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(getLikedVideos, [likedVideos]);

  return (
    <div className={styles.main_content_liked}>
      <h1 className="page_title">Liked videos</h1>
      <div className={styles.likevideos_container}>
        {likedVideos.map((likedVideo) => (
          <LikedCard key={likedVideo._id} {...likedVideo} />
        ))}
      </div>
    </div>
  );
}
