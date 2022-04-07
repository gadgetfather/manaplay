import React from "react";
import { VideoCard } from "../../components";
import * as styles from "./HomePage.module.css";
export function HomePage() {
  return (
    <main className={styles.main_content_home}>
      <div className={styles.category_pills_container}>
        <span className={styles.category_pills}>Action</span>
        <span className={styles.category_pills}>RPG</span>
        <span className={styles.category_pills}>Sports</span>
      </div>
      <div className={styles.video_grid}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </main>
  );
}
