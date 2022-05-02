import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
import * as styles from "./Searchbar.module.css";
export function Searchbar(props) {
  const { wordSetter, setWordSetter, handleFilter, filteredData, videos } =
    props;

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          onChange={(e) => {
            setWordSetter(e.target.value);
            handleFilter(e, videos);
          }}
          placeholder="Search for video..."
          className={styles.inputField}
          type="text"
          value={wordSetter}
        />
      </div>
      {wordSetter.length != 0 && (
        <div className={styles.dataResult}>
          {filteredData.map((item) => (
            <Link
              className={styles.dataResult_item}
              key={item.id}
              onClick={() => setWordSetter("")}
              to={`/watch/${item._id}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
