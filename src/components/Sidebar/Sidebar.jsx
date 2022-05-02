import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as styles from "./Sidebar.module.css";
export function Sidebar() {
  const location = useLocation();
  console.log(location);
  return (
    <aside className={`${styles.sidebar}`}>
      <div className={styles.sidebar_actions}>
        <NavLink
          className={({ isActive }) => (isActive ? `link ` : "link")}
          to={"/"}
        >
          <span
            title="Home"
            className={`material-icons-outlined ${
              location.pathname === "/" ? `${styles.active}` : ""
            }`}
          >
            home
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `link ` : "link")}
          to={"/playlist"}
        >
          <span
            title="Playlist"
            className={`material-icons-outlined ${
              location.pathname === "/playlist" ? `${styles.active}` : ""
            }`}
          >
            playlist_play
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `link ` : "link")}
          to={"/history"}
        >
          <span
            title="History"
            className={`material-icons-outlined ${
              location.pathname === "/history" ? `${styles.active}` : ""
            }`}
          >
            history
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `link ` : "link")}
          to={"/liked-videos"}
        >
          <span
            title="Liked videos"
            className={`material-icons ${
              location.pathname === "/liked-videos" ? `${styles.active}` : ""
            }`}
          >
            thumb_up_off_alt
          </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `link ${styles.active}` : "link"
          }
          to={"/watch-later"}
        >
          <span
            title="Watch later"
            className={`material-icons-outlined ${
              location.pathname === "/watch-later" ? `${styles.active}` : ""
            }`}
          >
            watch_later
          </span>
        </NavLink>
      </div>
    </aside>
  );
}
