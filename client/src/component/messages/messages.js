import React, { useEffect } from "react";
import "./style.scss";
import ScrollToBottom from "react-scroll-to-bottom";
const Messages = ({ messages, name }) => {
  useEffect(() => {
    console.log(messages, name);
  }, [messages, name]);
  return (
    <ScrollToBottom className="messageContainer">
      {messages.map((e, i) =>
        e.user === name ? (
          <div className="my message">
            <div>{e.text}</div>
          </div>
        ) : e.user === "admin" ? (
          <div className="admin message">
            <div>{e.text}</div>
          </div>
        ) : (
          <div className="other message">
            <div>{e.user}</div>
            <div className="text">{e.text}</div>
          </div>
        )
      )}
    </ScrollToBottom>
  );
};

export default Messages;
