import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={`${styles.sidebar}`}>
      <div className={styles.sidebar_actions}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/"}
        >
          <span title="Home" className="material-icons-outlined">
            home
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/playlist"}
        >
          <span title="Playlist" className="material-icons-outlined">
            playlist_play
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/history"}
        >
          <span title="History" className="material-icons-outlined">
            history
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/liked-videos"}
        >
          <span title="Liked videos" className="material-icons">
            thumb_up_off_alt
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/watch-later"}
        >
          <span title="Watch later" className="material-icons-outlined">
            watch_later
          </span>
        </NavLink>
      </div>
    </aside>
  );
}
