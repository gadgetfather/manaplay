import React from "react";
import { useNavigate } from "react-router-dom";
import { useLike } from "../../context/like-context";
import * as styles from "./LikedCard.module.css";
export function LikedCard(props) {
  const { title, thumbnail, views, creator, creator_image, _id } = props;
  const navigate = useNavigate();
  const { removeFromLike } = useLike();
  const handleRemove = (e, id) => {
    e.stopPropagation();
    removeFromLike(id);
    console.log("remove");
  };
  const handleWatch = () => {
    navigate(`/watch/${_id}`);
  };
  return (
    <div onClick={handleWatch} className={styles.likedCard_container}>
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
