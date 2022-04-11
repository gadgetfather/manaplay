import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SimilarVideoCard } from "../../components";
import { useLike } from "../../context/like-context";
import * as styles from "./SingleVideoPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useWatchlater } from "../../context/watchlater-context";
export function SingleVideoPage() {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const { addToWatchlater, removeFromWatchLater, watchLaterArr } =
    useWatchlater();
  const { addToLike, likedArr, removeFromLike } = useLike();
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get(`/api/video/${videoId}`);
          setVideo(response.data.video);
        } catch (error) {
          console.log(error);
        }
      })(),
    []
  );

  const handleLike = (video) => {
    addToLike(video);
  };
  const handleUnlike = (videoId) => {
    removeFromLike(videoId);
  };
  const handleWatchlater = (e, video) => {
    e.stopPropagation();
    addToWatchlater(video);
  };
  const handleRemoveFromWatchlater = (e, videoid) => {
    e.stopPropagation();
    removeFromWatchLater(videoid);
  };
  return (
    <div className={styles.main_content_singleVideo}>
      <ToastContainer />
      <div className={styles.video_container}>
        <iframe
          src={`https://www.youtube.com/embed/${video._id}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.video_details}>
        <h2>{video.title}</h2>
        <p>{video.views} views</p>
        <div className={styles.creator_details}>
          <div className={styles.creator_info}>
            <img
              className={styles.creator_profile_picture}
              src={video.creator_image}
              alt=""
            />
            <span>{video.creator}</span>
          </div>
          <div className={styles.video_actions}>
            {likedArr.some((video) => video._id === videoId) ? (
              <span
                title="unlike"
                onClick={() => handleUnlike(video._id)}
                className="material-icons"
              >
                thumb_up
              </span>
            ) : (
              <span
                title="I like this"
                onClick={() => handleLike(video)}
                className="material-icons-outlined"
              >
                thumb_up
              </span>
            )}
            <span className="material-icons-outlined">playlist_add</span>
            {watchLaterArr.some((videos) => videos._id === video._id) ? (
              <span
                title="remove from watch later"
                onClick={(e) => handleRemoveFromWatchlater(e, video._id)}
                className={` material-icons-outlined ${styles.watch_later_icon}`}
              >
                done
              </span>
            ) : (
              <span
                onClick={(e) => handleWatchlater(e, video)}
                className={` material-icons-outlined ${styles.watch_later_icon}`}
              >
                watch_later
              </span>
            )}
          </div>
        </div>
      </div>
      <h2 className={styles.section_title}>Similar Videos</h2>
      <div>
        <SimilarVideoCard />
      </div>
    </div>
  );
}
