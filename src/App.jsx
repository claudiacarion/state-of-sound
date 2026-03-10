import Discovery from "./components/Discovery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Repeat from "./components/Repeat";
import About from "./components/About";
import "./global.css";
import "animate.css"
import { useState } from "react";

function App() {
  const [page, setPage] = useState(null);

  return (
    <div className={`app ${page || "home"}`}>
      <Header updatePage={setPage} />
      <div className="main">
        {!page && <Home />}
        {page === "repeat" && <Repeat />}
        {page === "discovery" && <Discovery />}
        {page === "about" && <About />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
