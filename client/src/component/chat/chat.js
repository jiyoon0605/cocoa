import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { RoomInfo } from "../roomInfo";
import { Input } from "../input";
import { Messages } from "../messages";
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

    socket.emit("join", { name, room }, () => {
      alert(`${room}에 입장하셨습니다.`);
    });

    return () => {
      socket.emit("disconnect", () => {
        alert(`${room}을 떠났습니다.`);
      });
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
      console.log(messages);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <RoomInfo room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
