import React, { useState } from "react";
import { VideoCard } from "../../components";
import { Loader } from "../../components/Loader/Loader";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
import * as styles from "./HomePage.module.css";
export function HomePage() {
  const { videos, loader } = useFetchVideoData();
  return (
    <main className={styles.main_content_home}>
      <div className={styles.category_pills_container}>
        <span className={styles.category_pills}>Action</span>
        <span className={styles.category_pills}>RPG</span>
        <span className={styles.category_pills}>Sports</span>
      </div>
      <div className={styles.video_grid}>
        {loader
          ? [1, 2, 3, 4, 5].map((i, index) => <Loader key={index} />)
          : videos.map((video) => <VideoCard key={video._id} {...video} />)}
      </div>
    </main>
  );
}
