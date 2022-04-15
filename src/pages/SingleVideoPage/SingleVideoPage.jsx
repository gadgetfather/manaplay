import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlaylistModal, SimilarVideoCard } from "../../components";
import { useLike } from "../../context/like-context";
import * as styles from "./SingleVideoPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useWatchlater } from "../../context/watchlater-context";
import { useHistory } from "../../context/history-context";
import ReactPlayer from "react-player";
import { useAuth } from "../../context/auth-context";
import { usePlaylist } from "../../context/playlist-context";
export function SingleVideoPage() {
  const [video, setVideo] = useState({});
  const { addToHistory, removeFromHistory, historyArr } = useHistory();
  const { videoId } = useParams();
  const {
    userInfo: { token },
  } = useAuth();
  const { addToWatchlater, removeFromWatchLater, watchLaterArr } =
    useWatchlater();
  const { addToLike, likedArr, removeFromLike } = useLike();
  const {
    playlistsDispatch,
    playlists: { showModal },
  } = usePlaylist();
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get(`/api/video/${videoId}`);
          setVideo(response.data.video);
          const foundVideo = historyArr.find((item) => item._id === videoId);
          if (token && foundVideo) {
            removeFromHistory(foundVideo._id);
            addToHistory(foundVideo);
          } else if (token) {
            addToHistory(response.data.video);
          }
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
  const handleOpenModal = () => {
    if (token) {
      playlistsDispatch({ type: "SHOW_MODAL" });
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0 });
    } else {
      toast.error("You need to login", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className={styles.main_content_singleVideo}>
      <ToastContainer />
      <div className={styles.video_container}>
        {/* <ReactPlayer
          className={styles.react_player}
          controls={true}
          playing={true}
          volume={0.5}
          width="100%"
          height="100%"
          url={`https://www.youtube.com/embed/${video._id}?autoplay=0`}
        /> */}
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
            <span onClick={handleOpenModal} className="material-icons-outlined">
              playlist_add
            </span>
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
      {showModal ? <PlaylistModal /> : ""}
    </div>
  );
}
