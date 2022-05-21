import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchbarMobile.module.css";
export function SearchbarMobile(props) {
  const { wordSetter, setWordSetter, handleFilter, filteredData, videos } =
    props;
  return (
    <div className={styles.searchbar_mobile_container}>
      <input
        onChange={(e) => {
          setWordSetter(e.target.value);
          handleFilter(e, videos);
        }}
        className={styles.searchbar_mobile}
        placeholder="Search for video"
        type="search"
        value={wordSetter}
      />
      {wordSetter.length != 0 && (
        <div className={styles.search_result}>
          {filteredData.map((item) => (
            <Link
              className={styles.search_result_item}
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
