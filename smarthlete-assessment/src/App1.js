import React, { useState } from "react";
import MessageList from "./components/MessageList";
import Title from "./components/Title";
import SendMessageForm from "./components/SendMessageForm";

const App1 = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    // debugger;
    e.preventDefault();
    var d = new Date();
    setMessages([
      ...messages,
      {
        id: Math.random(),
        senderId: "User",
        text: message,
        time: d.getHours() + ":" + d.getMinutes(),
      },
    ]);
    // console.log(messages);
    setMessage("");
    botReply();
    return
  };

  const botReply = async () => {
    var d = new Date();
    var interval = (Math.floor(Math.random() * 10))*1000;
    console.log(interval);
      setTimeout(() => {
        setMessages((messages) => [
      ...messages,
      {
        id: Math.random(),
        senderId: "BotMessage",
        text: "hi",
        time: d.getHours() + ":" + d.getMinutes(),
      },
    ]);

      }, interval);


    
  };

  const deleteMsg = (e) => {

    
    const newTaskArray = messages.filter((message) =>  message.id !== e );
    console.log('App.js',newTaskArray);
    setMessages( newTaskArray );

    //      this.setState({people: this.state.people.filter(function(person) {
    //         return person !== e.target.value
    //     })});

    //  this.setState({
    //     data: this.state.data.filter((_, i) => i !== index)
    //   });

    // setMessages({messages: messages.filter((item)=> e!== item.id)})

    // debugger;
    // console.log(e);
    // console.log(message.id);

    // setMessages((messages) => {
    //   const { items } = messages;
    //   const filteredItems = items.filter((item) => e !== item.id);
    //   return {
    //     messages: filteredItems,
    //   };
    // });

    // setMessages(messages => {
    //       const tasks = messages.filter(task => task.id !== e);
    //       return { tasks };
    //   });

    console.log(messages);
  };

  return (
    <div className="app">
      <Title />
      <MessageList messages={messages} deleteMsg={deleteMsg} />
      <SendMessageForm
        handleSubmit={handleSubmit}
        message={message}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App1;
