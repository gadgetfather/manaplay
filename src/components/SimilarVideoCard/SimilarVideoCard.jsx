import React from "react";
import * as styles from "./SimilarVideoCard.module.css";
export function SimilarVideoCard() {
  return (
    <div className={styles.SimilarVideoCard_container}>
      <img
        className={styles.image}
        src="https://i.ytimg.com/vi/MVb1kW7BZGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFiAWtE4_Im58aykuWaRR_G77cdQ"
        alt=""
      />

      <div className={styles.video_details}>
        <p className={styles.title}>This is video title</p>
        <p className={styles.views}>220K views</p>
        <div className={styles.creator_info}>
          <img
            className={styles.profile_photo}
            src="https://yt3.ggpht.com/ytc/AKedOLToWTMynipuMC4-lKCYLu13sQJwsfYkGW3DA7XG=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p className={styles.creator}>Creator name</p>
        </div>
      </div>
    </div>
  );
}
