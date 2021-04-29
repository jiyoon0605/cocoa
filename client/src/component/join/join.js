import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room) && e.preventDefault()}
          to={`/chat?name=${name}&room=${room}`}
          className="button mt-20"
          type="submit"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Join;
