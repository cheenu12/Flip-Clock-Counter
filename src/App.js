import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"; /*imported the counter npm package */
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../src/assets/video.mp4"; /*imported the video form the folder */
import "./styles.css"; /* imported the style.css file */
const App = () => {
  return (
    <section className="page">
      <div className="overplay"></div>
      <video src={VideoBg} autoPlay loop muted>
        {" "}
      </video>
      {/* importd the video here */}
      <div className="page__content">
        <h1> Launching Soon</h1>
        <h3> Leave your mail and we will let you know </h3>

        {/* imported the flipClockCountdown npm package */}
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        ></FlipClockCountdown>
        <button className="btn"> Notify me </button>
      </div>
    </section>
  );
};

export default App;
