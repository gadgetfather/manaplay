import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatchlater } from "../../context/watchlater-context";
import * as styles from "./WatchlaterCard.module.css";
export function WatchlaterCard(props) {
  const { title, thumbnail, views, creator, creator_image, _id } = props;
  const navigate = useNavigate();
  const { removeFromWatchLater } = useWatchlater();
  const handleWatch = () => {
    navigate(`/watch/${_id}`);
  };
  const handleRemove = (e, _id) => {
    e.stopPropagation();
    removeFromWatchLater(_id);
  };
  return (
    <div onClick={handleWatch} className={styles.watchlaterCard_container}>
      <img className={styles.image} src={thumbnail} alt="thumbail" />

      <div className={styles.video_details}>
        <span
          onClick={(e) => handleRemove(e, _id)}
          className={`material-icons-outlined ${styles.btn_remove}`}
        >
          close
        </span>
        <p className={styles.title}>{title}</p>
        <p className={styles.views}>{views} views</p>
        <div className={styles.creator_info}>
          <img
            className={styles.profile_photo}
            src={creator_image}
            alt="creator"
          />
          <p className={styles.creator}>{creator}</p>
        </div>
      </div>
    </div>
  );
}
