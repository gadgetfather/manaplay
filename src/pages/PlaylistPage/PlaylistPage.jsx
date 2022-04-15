import React, { useEffect } from "react";
import { PlaylistCard } from "../../components";
import { usePlaylist } from "../../context/playlist-context";
import * as styles from "./PlaylistPage.module.css";
export function PlaylistPage() {
  const {
    getAllPlaylists,
    playlists: { playlistsArr },
  } = usePlaylist();
  useEffect(() => getAllPlaylists(), []);
  return (
    <div className={styles.main_content_playlist}>
      <div className={styles.title_container}>
        <h1 className="page_title">Playlist</h1>
      </div>
      <div className={styles.playlist_container}>
        {playlistsArr.length > 0 ? (
          playlistsArr
            .map((playlistData) => (
              <PlaylistCard key={playlistData._id} {...playlistData} />
            ))
            .reverse()
        ) : (
          <h1 className="page_title">Nothing is here ..</h1>
        )}
      </div>
    </div>
  );
}
