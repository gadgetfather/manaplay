import axios from "axios";
import React from "react";
import { LikedCard } from "../../components";
import { useLike } from "../../context/like-context";
import * as styles from "./LikedPage.module.css";
export function LikedPage() {
  const { likedArr } = useLike();

  return (
    <div className={styles.main_content_liked}>
      <h1 className="page_title">Liked videos</h1>
      <div className={styles.likevideos_container}>
        {likedArr.map((likedVideo) => (
          <LikedCard key={likedVideo._id} {...likedVideo} />
        ))}
      </div>
    </div>
  );
}
