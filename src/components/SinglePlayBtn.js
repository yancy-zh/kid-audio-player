import React from "react";
import { Button } from "antd";

import "./PlayerBody.css";
function SinglePlayBtn({ label, icon_custom, handleClick }) {
  return (
    <div className="single-play-btn-box">
      <Button icon={icon_custom} type="text" size="large" onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
}

export default SinglePlayBtn;
