import React from "react";
import "./AudioGroup.css";
export default function Audio({ id, name_track, src }) {
  return (
    <div className="track_container">
      <h3 className="track_label">{id +' '+ name_track}</h3>{" "}
      <audio src={src} controls autoplay></audio>
    </div>
  );
}
