import "./App.css";
import { Navbar, Sidebar } from "./components/index";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="page_container">
      <Navbar />
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
