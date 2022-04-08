import React from "react";
import * as styles from "./Loader.module.css";
export function Loader() {
  return (
    <div className={styles.video_card_container}>
      <div className={`${styles.video_thumbnail}`}>
        <div className={`${styles.thumbnail} ${styles.skeleton}`} />
      </div>
      <div className={styles.details}>
        <div className={`${styles.creator_image} ${styles.skeleton}`} />
        <div className={styles.video_description}>
          <div className={`${styles.text} ${styles.skeleton}`}></div>
          <div className={`${styles.text} ${styles.skeleton}`}></div>
          <div className={`${styles.text} ${styles.skeleton}`}></div>
        </div>
      </div>
    </div>
  );
}
