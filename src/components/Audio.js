import React, { useState } from "react";
import "./PlayerBody.css";
export default function Audio({
  listRef,
  id,
  name_track,
  src,
  reference,
  setCurrSong,
  setIsPlaying,
}) {
  const onPlay = () => {
    setCurrSong(listRef.current[id]);
    setTag(listRef.current[id].loop ? "single play" : " ");
    let myAudio = listRef.current[id];
    if (!myAudio.paused && !myAudio.ended) {
      //set a global isPlaying to true is any audio is playing
      setIsPlaying(true);
      const n = listRef.current.length;
      // when one audio is playing, set other audios to paused state
      // when one audio is playing, set other audios to not singlePlay
      for (let index = 0; index < n; index++) {
        if (index != id && listRef.current[index] != undefined) {
          const element = listRef.current[index];
          element.loop = false;
        }
      }
    }
  };
  const onPause = () => {
    setIsPlaying(false);
    setTag(listRef.current[id].loop ? "single play" : " ");
  };
  const [tag, setTag] = useState("");
  return (
    <div className="track_container">
      <h3 className="track_label">{id + " " + name_track}</h3>
      <span>{tag}</span>
      <audio
        src={src}
        controls
        ref={reference}
        onPlay={onPlay}
        onPause={onPause}
      ></audio>
    </div>
  );
}
