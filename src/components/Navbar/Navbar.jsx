import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import * as styles from "./Navbar.module.css";
import { ToastContainer, toast } from "react-toastify";
export function Navbar() {
  const navigate = useNavigate();
  const {
    userInfo: { token, user },
    setUserInfo,
  } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("Manaplay.encodedToken");
    localStorage.removeItem("Manaplay.User");
    setUserInfo({ token: "", user: {} });
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
