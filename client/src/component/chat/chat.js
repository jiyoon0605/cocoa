import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { RoomInfo } from "../roomInfo";
import "./style.scss";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);
  return (
    <div className="outerContainer">
      <RoomInfo room={room} />
      <div className="innerContainer">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
        />
      </div>
    </div>
  );
};

export default Chat;
