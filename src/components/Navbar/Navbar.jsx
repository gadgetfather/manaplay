import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import * as styles from "./Navbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useLike } from "../../context/like-context";
import { useHistory } from "../../context/history-context";
import { usePlaylist } from "../../context/playlist-context";
import { useTheme } from "../../context/theme-context";
export function Navbar() {
  const navigate = useNavigate();
  const {
    userInfo: { token, user },
    setUserInfo,
  } = useAuth();
  const { setLikedArr } = useLike();
  const { setHistoryArr } = useHistory();
  const { playlistDispatch } = usePlaylist();
  const { theme, setTheme } = useTheme();

  const logoutHandler = () => {
    localStorage.removeItem("Manaplay.encodedToken");
    localStorage.removeItem("Manaplay.User");
    setUserInfo({ token: "", user: {} });
    setLikedArr([]);
    setHistoryArr([]);
    playlistDispatch({ type: "RESET" });
    navigate("/");
    toast.error("You have been logged out", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (newTheme === "dark") {
      document.body.style.backgroundColor = "#222831";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setTheme(newTheme);
  };
  return (
    <nav className={styles.navbar}>
      <ToastContainer />
      <Link className="link" to={"/"}>
        <h1 className={styles.brand_name}>Manaplay</h1>
      </Link>
      <div className={styles.nav_actions}>
        <span
          className={`${styles.icons} ${styles.username} material-icons-outlined`}
        >
          search
        </span>

        {token ? (
          <>
            <p>{user.firstName}</p>
            <span className={`${styles.icons} material-icons-outlined`}>
              person
            </span>
            <span
              onClick={logoutHandler}
              className={`${styles.icons} material-icons-outlined`}
            >
              logout
            </span>
            {theme ? (
              <span
                onClick={switchTheme}
                className={`${styles.icons} material-icons-outlined`}
              >
                light_mode
              </span>
            ) : (
              <span
                onClick={switchTheme}
                className={`${styles.icons} material-icons-outlined`}
              >
                dark_mode
              </span>
            )}
          </>
        ) : (
          <Link to={"/login"} className={`btn btn-secondary ${styles.sign_in}`}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
