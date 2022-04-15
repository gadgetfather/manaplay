import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../context/playlist-context";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";

import { PlaylistGrid } from "../PlaylistGrid/PlaylistGrid";
import * as styles from "./PlaylistModal.module.css";
export function PlaylistModal() {
  const [showInput, setShowInput] = useState(false);
  const [formValues, setFormValues] = useState({ title: "", description: "" });
  const {
    playlistsDispatch,
    createNewPlaylist,
    playlists: { playlistsArr },
  } = usePlaylist();
  const { videoId } = useParams();
  const { videos } = useFetchVideoData();
  const videoToAdd = videos.find((item) => item._id === videoId);
  const handleCloseModal = () => {
    playlistsDispatch({ type: "HIDE_MODAL" });
    document.body.style.overflow = "unset";
  };

  const handleCreatePlaylist = (e, formValues) => {
    e.preventDefault();
    createNewPlaylist(formValues);
    setShowInput(false);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.modal_top_part}>
          <div className={styles.modal_head}>
            <span>Save to...</span>
            <span
              onClick={handleCloseModal}
              className={`${styles.btn_close} material-icons-outlined`}
            >
              close
            </span>
          </div>
          <div className={styles.modal_content}>
            {playlistsArr.length > 0 ? (
              playlistsArr.map((item) => (
                <PlaylistGrid key={item._id} {...item} />
              ))
            ) : (
              <p className={styles.modal_text}>Create your first playlist :)</p>
            )}
            <div
              onClick={() => setShowInput(true)}
              className={styles.modal_footer}
            >
              <span className="material-icons-outlined">add</span>
              <span>Create new playlist</span>
            </div>
          </div>
        </div>
        {showInput ? (
          <form className={styles.modal_input}>
            <label htmlFor="Name">Name</label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, title: e.target.value })
              }
              id="Name"
              name="Name"
              type="text"
              value={formValues.name}
              required
            />
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) =>
                setFormValues({ ...formValues, description: e.target.value })
              }
              name="description"
              type="text"
              value={formValues.description}
            />
            <button
              onClick={(e) => handleCreatePlaylist(e, formValues, videoToAdd)}
              className={`${styles.modal_create_btn} btn btn-primary`}
            >
              Create
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
