import React from "react";
import "./style.scss";
const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="container">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
      />
      <button type="submit" onClick={(e) => sendMessage(e)}>
        send
      </button>
    </form>
  );
};

export default Input;
