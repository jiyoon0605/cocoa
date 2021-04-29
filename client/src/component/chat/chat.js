import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);

    socket.emit("join", { name, room }, ({ error }) => {
      alert(error);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  return <h1>Chat1</h1>;
};

export default Chat;
