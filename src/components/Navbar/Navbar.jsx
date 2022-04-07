import React from "react";
import * as styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand_name}>Manaplay</h1>
      <div className={styles.nav_actions}>
        <span className="material-icons-outlined">search</span>

        <span className="material-icons-outlined">person</span>
        <span className="material-icons-outlined">logout</span>
      </div>
    </nav>
  );
}
