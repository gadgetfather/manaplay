import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./LoginPage.module.css";
export function LoginPage() {
  return (
    <main className={styles.main_content_login}>
      <form className={styles.form_container}>
        <label htmlFor="email">Email</label>
        <input type="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className={`btn btn-primary ${styles.submit_btn}`}>
          Login
        </button>
        <Link className="link" to="/sdss">
          Dont Have account?
        </Link>
      </form>
    </main>
  );
}
