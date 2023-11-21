// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <>
      <div id="video-wrapper">
        <video id="video" autoplay muted playsinline></video>
        <canvas id="overlay"></canvas>
      </div>
    </>
  );
}

export default App;
