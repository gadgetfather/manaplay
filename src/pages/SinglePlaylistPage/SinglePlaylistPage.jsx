import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaylistVideoCard } from "../../components";
import { useAuth } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
import * as styles from "./SinglePlaylistPage.module.css";
export function SinglePlaylistPage() {
  const { playlistId } = useParams();
  const {
    userInfo: { token },
  } = useAuth();
  const [singlePlaylist, setSinglePlaylist] = useState({
    playlist: {},
    videos: [],
  });
  const { playlists } = usePlaylist();
  const getSinglePlaylist = async (playlistId) => {
    try {
      const response = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });
      setSinglePlaylist({
        ...singlePlaylist,
        videos: response.data.playlist.videos,
        playlist: response.data.playlist,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getSinglePlaylist(playlistId), [playlists]);

  return (
    <div className={styles.main_content_singleplaylist}>
      <div className={styles.title_container}>
        <h1 className="page_title">{singlePlaylist.playlist.title}</h1>
      </div>
      <p className={styles.playlist_description}>
        {singlePlaylist.playlist.description}
      </p>
      <div className={styles.breaker}></div>
      <div className={styles.playlist_container}>
        {singlePlaylist.videos.length > 0 ? (
          singlePlaylist.videos.map((item) => (
            <PlaylistVideoCard
              key={item._id}
              playlistId={playlistId}
              {...item}
            />
          ))
        ) : (
          <h2>Nothing is here :( </h2>
        )}
      </div>
    </div>
  );
}
