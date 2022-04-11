import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatchlater } from "../../context/watchlater-context";
import * as styles from "./VideoCard.module.css";
export function VideoCard(props) {
  const { creator_image, creator, title, views, _id, thumbnail } = props;
  const navigate = useNavigate();
  const { addToWatchlater, watchLaterArr, removeFromWatchLater } =
    useWatchlater();
  const navigateToVideo = () => {
    navigate(`/watch/${_id}`);
  };
  const handleWatchlater = (e, video) => {
    e.stopPropagation();
    addToWatchlater(video);
  };
  const handleRemoveFromWatchlater = (e, videoid) => {
    e.stopPropagation();
    removeFromWatchLater(videoid);
  };
  return (
    <div onClick={navigateToVideo} className={styles.video_card_container}>
      <div className={styles.video_thumbnail}>
        {watchLaterArr.some((video) => video._id === _id) ? (
          <span
            onClick={(e) => handleRemoveFromWatchlater(e, _id)}
            className={` material-icons-outlined ${styles.watch_later_icon}`}
          >
            done
          </span>
        ) : (
          <span
            onClick={(e) => handleWatchlater(e, props)}
            className={` material-icons-outlined ${styles.watch_later_icon}`}
          >
            watch_later
          </span>
        )}
        <img className={styles.thumbnail} src={thumbnail} alt="video-art" />
      </div>
      <div className={styles.details}>
        <img
          className={styles.creator_image}
          src={creator_image}
          alt="creator"
        />
        <div className={styles.video_description}>
          <span className={styles.video_title}>{title}</span>
          <span className={styles.creator_name}>{creator} </span>
          <span className={styles.view_count}>{views} views</span>
        </div>
      </div>
    </div>
  );
}
