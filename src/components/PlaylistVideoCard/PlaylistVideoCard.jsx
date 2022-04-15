import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import * as styles from "./PlaylistVideoCard.module.css";
export function PlaylistVideoCard(props) {
  const { _id, title, views, creator_image, creator, thumbnail, playlistId } =
    props;
  const navigate = useNavigate();
  const { removeVideoFromPlaylist } = usePlaylist();

  const handleRemove = (e, playlistId, _id) => {
    e.stopPropagation();
    removeVideoFromPlaylist(playlistId, _id);
  };
  const handleWatch = () => {
    navigate(`/watch/${_id}`);
  };
  return (
    <div onClick={handleWatch} className={styles.playlistVideoCard_container}>
      <img className={styles.image} src={thumbnail} alt="thumbail" />

      <div className={styles.video_details}>
        <span
          onClick={(e) => handleRemove(e, playlistId, _id)}
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
