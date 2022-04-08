import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className="link" to={"/"}>
        <h1 className={styles.brand_name}>Manaplay</h1>
      </Link>
      <div className={styles.nav_actions}>
        <span className={`${styles.icons} material-icons-outlined`}>
          search
        </span>
        <Link to={"/login"} className={`btn btn-secondary ${styles.sign_in}`}>
          Sign In
        </Link>
        {/* <span className={`${styles.icons} material-icons-outlined`}>
          person
        </span> */}
        {/* <span className={`${styles.icons} material-icons-outlined`}>
          logout
        </span> */}
      </div>
    </nav>
  );
}
