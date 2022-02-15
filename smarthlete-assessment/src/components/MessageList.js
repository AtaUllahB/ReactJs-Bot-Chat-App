import React, { Fragment } from "react";

const MessageList = (props) => {
  let messages = props.messages;
  return (
    <ul className="message-list">
      {messages.length > 1 && messages
        ? messages.map((message, index) => {
            return (
              <li key={message.id} className="message">
                {message.senderId === "BotMessage" ? (
                  <Fragment>
                    <div className="bot_message pull-right float-right">
                      {message.senderId}
                    </div>
                    <div className="bot_message float-right pull-right">{message.text}</div>
                    <div className="bot_message float-right pull-right" >{message.time}</div>
                    <button
                      data-toggle="tooltip"
                      title="Delete Message!"
                      className="btn-xs bot_message btn btn-danger pull-right float-right"
                      onClick={() => props.deleteMsg(message.id)}
                    >
                      delete
                    </button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div>{message.senderId}</div>
                    <div>{message.text}</div>
                    <div>{message.time}</div>
                    <button
                      data-toggle="tooltip"
                      title="Delete Message!"
                      className="btn-xs btn btn-danger"
                      onClick={() => props.deleteMsg(message.id)}
                    >
                      delete
                    </button>
                  </Fragment>
                )}
              </li>
            );
          })
        : ""}
    </ul>
  );
};

export default MessageList;
