import axios from "axios";
import React, { useEffect } from "react";
import { WatchlaterCard } from "../../components";
import { useWatchlater } from "../../context/watchlater-context";
import * as styles from "./WatchlaterPage.module.css";
export function WatchlaterPage() {
  const { watchLaterArr } = useWatchlater();

  return (
    <div className={styles.main_content_watchlater}>
      <h1 className="page_title">Watch later</h1>
      <div className={styles.watchlater_container}>
        {watchLaterArr.length > 0 ? (
          watchLaterArr.map((Video) => (
            <WatchlaterCard key={Video._id} {...Video} />
          ))
        ) : (
          <h1 className="page_title">Nothing is here ..</h1>
        )}
      </div>
    </div>
  );
}
