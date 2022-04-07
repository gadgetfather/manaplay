import React from "react";
import * as styles from "./MobileMenu.module.css";
export function MobileMenu() {
  return (
    <div className={styles.mobile_menu}>
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
  );
}
