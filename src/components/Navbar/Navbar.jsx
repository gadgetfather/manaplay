import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import * as styles from "./Navbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useLike } from "../../context/like-context";
import { useHistory } from "../../context/history-context";
import { usePlaylist } from "../../context/playlist-context";
import { useTheme } from "../../context/theme-context";
import { Searchbar } from "../Searchbar/Searchbar";
import { SearchbarMobile } from "../SearchbarMobile/SearchbarMobile";
import { useFetchVideoData } from "../../hooks/useFetchVideoData";
export function Navbar() {
  const [isActive, setIsActive] = useState(false);
  function handleSearch() {
    console.log("ckick");
    setIsActive(!isActive);
  }
  const navigate = useNavigate();
  const {
    userInfo: { token, user },
    setUserInfo,
  } = useAuth();
  const { setLikedArr } = useLike();
  const { setHistoryArr } = useHistory();
  const { playlistDispatch } = usePlaylist();
  const { theme, setTheme } = useTheme();
  const { videos } = useFetchVideoData();

  const [showSearchbar, setShowSearchbar] = useState(false);
  const [wordSetter, setWordSetter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem("Manaplay.encodedToken");
    localStorage.removeItem("Manaplay.User");
    setUserInfo({ token: "", user: {} });
    setLikedArr([]);
    setHistoryArr([]);
    playlistDispatch({ type: "RESET" });
    navigate("/");
    toast.error("You have been logged out", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (newTheme === "dark") {
      document.body.style.backgroundColor = "#222831";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setTheme(newTheme);
  };

  const handleFilter = (e, data) => {
    let text = e.target.value.toLowerCase().trim();
    let textLength = text.length;
    let result = data.filter(
      (item) =>
        item.title.toLowerCase().substring(0, textLength).includes(text) ||
        item.category.toLowerCase().substring(0, textLength).includes(text) ||
        item.creator.toLowerCase().substring(0, textLength).includes(text)
    );
    if (textLength > 0) {
      result.length > 0
        ? setFilteredData(result)
        : setFilteredData([{ id: 0, title: "Not Found" }]);
    } else setFilteredData([]);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <ToastContainer />
        <div className={styles.left_part}>
          <Link className="link" to={"/"}>
            <h1 className={styles.brand_name}>Manaplay</h1>
          </Link>
        </div>

        <div className={styles.nav_actions}>
          <Searchbar
            wordSetter={wordSetter}
            setWordSetter={setWordSetter}
            handleFilter={handleFilter}
            filteredData={filteredData}
            videos={videos}
          />
          {token ? (
            <>
              <p>{user.firstName}</p>
              <span className={`${styles.icons} material-icons-outlined`}>
                person
              </span>
              <span
                onClick={logoutHandler}
                className={`${styles.icons} material-icons-outlined`}
              >
                logout
              </span>
            </>
          ) : (
            <Link
              to={"/login"}
              className={`btn btn-secondary ${styles.sign_in}`}
            >
              Sign In
            </Link>
          )}
          {theme === "light" ? (
            <span
              onClick={switchTheme}
              className={`${styles.icons} material-icons-outlined`}
            >
              light_mode
            </span>
          ) : (
            <span
              onClick={switchTheme}
              className={`${styles.icons} material-icons-outlined`}
            >
              dark_mode
            </span>
          )}
        </div>
      </nav>
      <SearchbarMobile
        wordSetter={wordSetter}
        setWordSetter={setWordSetter}
        handleFilter={handleFilter}
        filteredData={filteredData}
        videos={videos}
      />
    </>
  );
}
