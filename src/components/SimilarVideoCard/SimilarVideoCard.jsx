import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./SimilarVideoCard.module.css";
export function SimilarVideoCard(props) {
  const navigate = useNavigate();
  const { title, thumbnail, creator_image, creator, views, _id } = props;
  const navigateToVideo = () => {
    navigate(`/watch/${_id}`);
  };
  return (
    <div
      onClick={navigateToVideo}
      className={styles.SimilarVideoCard_container}
    >
      <img className={styles.image} src={thumbnail} alt="" />

      <div className={styles.video_details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.views}>{views}</p>
        <div className={styles.creator_info}>
          <img className={styles.profile_photo} src={creator_image} alt="" />
          <p className={styles.creator}>{creator}</p>
        </div>
      </div>
    </div>
  );
}
