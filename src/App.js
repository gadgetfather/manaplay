import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import { MobileMenu, Navbar, PlaylistModal, Sidebar } from "./components/index";
import {
  HistoryPage,
  HomePage,
  LikedPage,
  LoginPage,
  PlaylistPage,
  SignupPage,
  SingleVideoPage,
  WatchlaterPage,
  SinglePlaylistPage,
  ErrorPage,
} from "./pages";
import { ProtectedRoute } from "./route/ProtectedRoute";
import MockmanEs from "mockman-js";
import { usePlaylist } from "./context/playlist-context";
import { useTheme } from "./context/theme-context";
function App() {
  const { theme, setTheme } = useTheme();

  const {
    playlists: { showModal },
  } = usePlaylist();
  return (
    <>
      <div className="page_container" data-theme={theme}>
        <Navbar />
        <Sidebar />
        <MobileMenu />
        <Routes>
          <Route path="/mock" element={<MockmanEs />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/watch-later"
            element={
              <ProtectedRoute>
                <WatchlaterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/liked-videos"
            element={
              <ProtectedRoute>
                <LikedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/playlist"
            element={
              <ProtectedRoute>
                <PlaylistPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watch/:videoId"
            element={
              <SingleVideoPage>
                {showModal ? <PlaylistModal /> : ""}
              </SingleVideoPage>
            }
          />
          <Route
            path="/playlist/:playlistId"
            element={<SinglePlaylistPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
