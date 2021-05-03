import React from "react";
import "./style.scss";
const RoomInfo = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="left">
        <div className="online"></div>
        <h3>{room}</h3>
      </div>
      <div className="right">
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default RoomInfo;
