import React from "react";
import * as styles from "./VideoCard.module.css";
export function VideoCard() {
  return (
    <div className={styles.video_card_container}>
      <div className={styles.video_thumbnail}>
        <img
          className={styles.thumbnail}
          src="https://i.ytimg.com/vi/WfduJifpOB8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6HbJ-MDaxrr7vAFx5SLmMogra_g"
          alt=""
        />
      </div>
      <div className={styles.details}>
        <img
          className={styles.creator_image}
          src="https://yt3.ggpht.com/ytc/AKedOLSN0ta03ELPkWsoHGw5ZM0jxtEegOPXOcROrWxMig=s68-c-k-c0x00ffffff-no-rj"
          alt="creator"
        />
        <div className={styles.video_description}>
          <span className={styles.video_title}>goodbye olympus</span>
          <span className={styles.creator_name}>aceu </span>
          <span className={styles.view_count}>212K views</span>
        </div>
      </div>
    </div>
  );
}
