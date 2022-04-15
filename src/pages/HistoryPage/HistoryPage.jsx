import React from "react";
import { HistoryCard } from "../../components";
import { useHistory } from "../../context/history-context";
import * as styles from "./HistoryPage.module.css";
export function HistoryPage() {
  const { historyArr, removeAllHistory } = useHistory();
  return (
    <div className={styles.main_content_history}>
      <div className={styles.title_container}>
        <h1 className="page_title">History</h1>
        {historyArr.length > 0 ? (
          <button
            onClick={() => removeAllHistory()}
            className={`${styles.clear_btn}btn btn-secondary`}
          >
            Clear all
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={styles.history_container}>
        {historyArr.length > 0 ? (
          historyArr
            .map((Video) => <HistoryCard key={Video._id} {...Video} />)
            .reverse()
        ) : (
          <h1 className="page_title">Nothing is here ..</h1>
        )}
      </div>
    </div>
  );
}
