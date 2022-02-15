import React from "react";

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="send-message-form">
      <input
        onChange={props.handleChange}
        value={props.message}
        placeholder="Type your message and hit ENTER"
        type="text"
      />
    </form>
  );
};

export default SendMessageForm;
