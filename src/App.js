import "./App.css";
import { useState } from "react";
import Background from "./Components/Background/Background";
import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Carousel/Slide/About/About";

function App() {
  const [pageNo, setPageNo] = useState(0);

  return (
    <div className="App" >
      <div className="openAnimation"></div>
      <Background pageNo={pageNo} />
      <Navbar />
      <Carousel pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}

export default App;