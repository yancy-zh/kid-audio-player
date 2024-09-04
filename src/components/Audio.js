import React, { useState } from "react";
import "./PlayerBody.css";
export default function Audio({
  listRef,
  id,
  name_track,
  src,
  reference,
  setCurrSong,
}) {
  const handlePlay = () => {
    setCurrSong(listRef.current[id]);
    setTag(listRef.current[id].loop ? "single play" : " ");
  };
  const [tag, setTag] = useState("");
  return (
    <div className="track_container">
      <h3 className="track_label">{id + " " + name_track}</h3> <span>{}</span>
      <span>{tag}</span>
      <audio src={src} controls ref={reference} onPlay={handlePlay}></audio>
    </div>
  );
}
