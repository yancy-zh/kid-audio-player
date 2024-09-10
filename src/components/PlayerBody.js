import React, { useState, useRef, useEffect, createRef } from "react";
import "./PlayerBody.css";
import Audio from "./Audio.js";
import PlayAll from "./PlayAll.js";
import SinglePlayBtn from "./SinglePlayBtn.js";
import {
  RetweetOutlined,
  DragOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
export default function PlayerBody({ data }) {
  const [currSong, setCurrSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const getFileName = (id, name) => {
    return id.toString().padStart(2, "0") + " - " + name + ".m4a";
  };
  const getSrcPath = (fileName) => {
    return "/audios/" + fileName;
  };
  const handleSinglePlay = () => {
    currSong.loop = !currSong.loop;
  };
  const handleOrderPlay = () => {};
  const handleRandomPlay = () => {};
  const elRefs = useRef(new Array());
  if (elRefs.current.length !== data.length) {
    elRefs.current =
      Array(data.length)
        .fill()
        .map((_, i) => elRefs.current[i]) || createRef();
  }

  return (
    <div className="player-body">
      <div className="audio-control">
        <div className="play_status">
          {isPlaying ? (
            <PlayCircleOutlined
              style={{ fontSize: "24px", color: "#f82567" }}
            />
          ) : (
            <PauseCircleOutlined
              style={{ fontSize: "24px", color: "#f82567" }}
            />
          )}
        </div>
        <SinglePlayBtn
          label="随机播放"
          icon_custom={<DragOutlined />}
        ></SinglePlayBtn>
        <SinglePlayBtn
          label="单曲播放"
          icon_custom={<RetweetOutlined />}
          handleClick={handleSinglePlay}
        ></SinglePlayBtn>
        <PlayAll currSong={currSong}></PlayAll>
      </div>
      <div className="audio-group-container">
        {data.map(({ id, name }) => {
          return (
            <Audio
              key={id}
              listRef={elRefs}
              id={id}
              name_track={name}
              src={getSrcPath(getFileName(id, name))}
              reference={(elem) => (elRefs.current[id] = elem)}
              setCurrSong={setCurrSong}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
            ></Audio>
          );
        })}
      </div>
    </div>
  );
}
