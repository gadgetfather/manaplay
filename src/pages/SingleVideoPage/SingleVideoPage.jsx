import React from "react";
import { SimilarVideoCard } from "../../components";
import * as styles from "./SingleVideoPage.module.css";
export function SingleVideoPage() {
  return (
    <div className={styles.main_content_singleVideo}>
      <div class={styles.video_container}>
        <iframe
          src="https://www.youtube.com/embed/dGinJhh27SQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.video_details}>
        <h2>This is video title</h2>
        <p>200K views</p>
        <div className={styles.creator_details}>
          <div className={styles.creator_info}>
            <img
              className={styles.creator_profile_picture}
              src="https://yt3.ggpht.com/ytc/AKedOLToWTMynipuMC4-lKCYLu13sQJwsfYkGW3DA7XG=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <span>Creator name</span>
          </div>
          <div className={styles.video_actions}>
            <span class="material-icons-outlined">thumb_up</span>
            <span class="material-icons-outlined">playlist_add</span>
            <span class="material-icons-outlined">watch_later</span>
          </div>
        </div>
      </div>
      <h2 className={styles.section_title}>Similar Videos</h2>
      <div>
        <SimilarVideoCard />
      </div>
    </div>
  );
}
