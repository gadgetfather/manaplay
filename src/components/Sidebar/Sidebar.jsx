import React from "react";
import * as styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={`${styles.sidebar}`}>
      <div className={styles.sidebar_actions}>
        <span title="Home" className="material-icons-outlined">
          home
        </span>
        <span title="Playlist" className="material-icons-outlined">
          playlist_play
        </span>
        <span title="History" className="material-icons-outlined">
          history
        </span>
        <span title="Liked videos" className="material-icons">
          thumb_up_off_alt
        </span>
      </div>
    </aside>
  );
}
