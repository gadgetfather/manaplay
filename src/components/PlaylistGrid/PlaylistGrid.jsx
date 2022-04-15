import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
import * as styles from "./PlaylistGrid.module.css";
export function PlaylistGrid(props) {
  const { title, _id, videos: videosArr } = props;
  const location = useLocation();
  const { videoId } = useParams();
  const [check, setCheck] = useState(false);
  const { videos } = useFetchVideoData();
  const videoToAdd = videos.find((item) => item._id === videoId);
  const { addVideoToPlaylist, removeVideoFromPlaylist } = usePlaylist();

  const PlaylistUpdate = (e, playlistId, video) => {
    const checked = e.target.checked;
    if (checked) {
      addVideoToPlaylist(playlistId, video);
    } else {
      removeVideoFromPlaylist(playlistId, video._id);
    }
  };

  const checkVideoInPlaylist = () => {
    if (videosArr.length > 0) {
      const isInPlaylist = videosArr.some((item) => item._id === videoId);
      return isInPlaylist;
    } else {
      return false;
    }
  };
  return (
    <div className={styles.PlaylistGrid_container}>
      <input
        onChange={(e) => {
          setCheck(!check);
          PlaylistUpdate(e, _id, videoToAdd);
        }}
        id={title}
        checked={checkVideoInPlaylist()}
        type="checkbox"
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
