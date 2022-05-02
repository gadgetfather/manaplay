import React, { useState } from "react";
import { VideoCard } from "../../components";
import { Loader } from "../../components/Loader/Loader";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
import * as styles from "./HomePage.module.css";
import { shuffle } from "./shuffle";
export function HomePage() {
  const { videos, loader } = useFetchVideoData();
  const [activeLabel, setActiveLabel] = useState("all");

  const filterByCategory = (array, label) => {
    if (label === "all") {
      return array;
    }
    return array.filter((item) => (item.category === label ? item : false));
  };
  const getFilteredData = filterByCategory(videos, activeLabel);

  return (
    <main className={styles.main_content_home}>
      <div className={styles.category_pills_container}>
        <span
          onClick={() => setActiveLabel("all")}
          className={`${styles.category_pills} ${
            activeLabel == "all" ? styles.active : ""
          }`}
        >
          All
        </span>
        <span
          onClick={() => setActiveLabel("trailer")}
          className={`${styles.category_pills} ${
            activeLabel == "trailer" ? styles.active : ""
          }`}
        >
          trailer
        </span>
        <span
          onClick={(e) => setActiveLabel("GTA V")}
          className={`${styles.category_pills} ${
            activeLabel == "GTA V" ? styles.active : ""
          }`}
        >
          GTA V
        </span>
        <span
          onClick={(e) => setActiveLabel("apex")}
          className={`${styles.category_pills} ${
            activeLabel == "apex" ? styles.active : ""
          }`}
        >
          apex
        </span>
      </div>
      <div className={styles.video_grid}>
        {loader
          ? [1, 2, 3, 4, 5].map((i, index) => <Loader key={index} />)
          : shuffle(getFilteredData).map((video) => (
              <VideoCard key={video._id} {...video} />
            ))}
      </div>
    </main>
  );
}
