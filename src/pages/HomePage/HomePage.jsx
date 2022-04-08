import React from "react";
import { VideoCard } from "../../components";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
import * as styles from "./HomePage.module.css";
export function HomePage() {
  const videos = useFetchVideoData();

  return (
    <main className={styles.main_content_home}>
      <div className={styles.category_pills_container}>
        <span className={styles.category_pills}>Action</span>
        <span className={styles.category_pills}>RPG</span>
        <span className={styles.category_pills}>Sports</span>
      </div>
      <div className={styles.video_grid}>
        {videos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </main>
  );
}
