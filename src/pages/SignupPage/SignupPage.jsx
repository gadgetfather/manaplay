import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./SignupPage.module.css";
export function SignupPage() {
  return (
    <main className={styles.main_content_login}>
      <h1 className={styles.page_title}>Signup</h1>
      <form className={styles.form_container}>
        <label htmlFor="Name">Name</label>
        <input type="Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className={`btn btn-primary ${styles.submit_btn}`}>
          Login
        </button>
        <Link className="link" to="/login">
          Already Have account?
        </Link>
      </form>
    </main>
  );
}
