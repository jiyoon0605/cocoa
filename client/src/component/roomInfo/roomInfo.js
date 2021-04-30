import React from "react";
import "./style.scss";
const RoomInfo = ({ room }) => {
  console.log(room);
  return (
    <div className="infoBar">
      <div className="left">
        <i class="fas fa-wifi"></i>
        <h3>{room}</h3>
      </div>
      <div className="right">
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default RoomInfo;
