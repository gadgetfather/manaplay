import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./ErrorPage.module.css";
export function ErrorPage() {
  return (
    <div className={styles.main_content_error}>
      <h1 className="page_title">Page Not Found</h1>
      <p>Looks like you are lost...</p>
      <Link className="btn btn-primary" to={"/"}>
        Back to home
      </Link>
    </div>
  );
}
