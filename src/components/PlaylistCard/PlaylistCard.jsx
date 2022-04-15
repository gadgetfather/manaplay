import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import * as styles from "./PlaylistCard.module.css";
export function PlaylistCard(props) {
  const { title, description, _id } = props;
  const navigate = useNavigate();
  const { deleteThePlaylist } = usePlaylist();
  const handledeletePlaylist = (e, _id) => {
    e.stopPropagation();
    deleteThePlaylist(_id);
  };
  const navigateToPlaylist = (_id) => {
    navigate(`/playlist/${_id}`);
  };
  return (
    <div
      onClick={() => navigateToPlaylist(_id)}
      className={styles.playlist_card_container}
    >
      <span
        onClick={(e) => handledeletePlaylist(e, _id)}
        className={`${styles.btn_delete} material-icons-outlined`}
      >
        close
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
