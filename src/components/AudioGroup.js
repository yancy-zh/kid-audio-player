import React from "react";
import "./AudioGroup.css";
import Audio from "./Audio.js";
export default function AudioGroup({ data }) {
  const getFileName = (id, label) => {
    return id.toString().padStart(2, "0") + " - " + label + ".m4a";
  };
  const getSrcPath = (fileName) => {
    return "/audios/" + fileName;
  };
  return (
    <div className="audio-group-container">
      {data.map(({ id, label }) => {
        return (
          // <p>{id + " " + label + " " + getSrcPath(getFileName(id, label))}</p>
          <Audio
            id={id}
            name_track={label}
            src={getSrcPath(getFileName(id, label))}
            autoplay
          ></Audio>
        );
      })}
    </div>
  );
}
