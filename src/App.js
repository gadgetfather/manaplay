import "./App.css";
import { MobileMenu, Navbar, Sidebar } from "./components/index";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="page_container">
      <Navbar />
      <Sidebar />
      <HomePage />
      <MobileMenu />
    </div>
  );
}

export default App;
