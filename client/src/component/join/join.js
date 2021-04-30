import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();

  return (
    <div className="joinOuterContainer">
      <form className="joinInnerContainer">
        <h1 className="heading">
          Join To <br />
          pongdang!
        </h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room Number"
            className="joinInput"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button
          onClick={(e) =>
            !name || !room
              ? e.preventDefault()
              : history.push(`/chat?name=${name}&room=${room}`)
          }
          className="button mt-20"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Join;
