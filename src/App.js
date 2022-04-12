import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { MobileMenu, Navbar, Sidebar } from "./components/index";
import {
  HistoryPage,
  HomePage,
  LikedPage,
  LoginPage,
  SignupPage,
  SingleVideoPage,
  WatchlaterPage,
} from "./pages";
import { ProtectedRoute } from "./route/ProtectedRoute";

function App() {
  return (
    <div className="page_container">
      <Navbar />
      <Sidebar />
      <MobileMenu />
      <Routes>
        <Route path="*" element={<h1>This under construction</h1>} />
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
              <h1>Playlist</h1>
            </ProtectedRoute>
          }
        />
        <Route path="/watch/:videoId" element={<SingleVideoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
