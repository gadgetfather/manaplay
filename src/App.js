import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MobileMenu, Navbar, Sidebar } from "./components/index";
import { HomePage, SingleVideoPage } from "./pages";

function App() {
  return (
    <div className="page_container">
      <Navbar />
      <Sidebar />
      <MobileMenu />
      <Routes>
        <Route path="*" element={<h1>This under construction</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/watch-later" element={<h1>Watch later</h1>} />
        <Route path="/liked-videos" element={<h1>Liked videos</h1>} />
        <Route path="/history" element={<h1>History</h1>} />
        <Route path="/playlist" element={<h1>Playlist</h1>} />
        <Route path="/watch" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
