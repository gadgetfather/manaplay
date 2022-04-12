import React from "react";
import { useHistory } from "../../context/history-context";
import * as styles from "./HistoryCard.module.css";
export function HistoryCard(props) {
  const { _id, title, views, creator_image, creator, thumbnail } = props;
  const { removeFromHistory } = useHistory();
  const handleRemove = (e, _id) => {
    e.stopPropagation();
    removeFromHistory(_id);
  };
  const handleWatch = () => {
    navigate(`/watch/${_id}`);
  };
  return (
    <div onClick={handleWatch} className={styles.historyCard_container}>
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
