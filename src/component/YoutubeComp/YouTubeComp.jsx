import React from "react";
import "./YouTubeComp.css";
import OnePieceImg from "../../asset/one-piece.jpg";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={OnePieceImg} alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  title: "ini adalah judul default",
  time: "00.00",
  dec: "ini adalah desc default",
};
export default YouTubeComp;
