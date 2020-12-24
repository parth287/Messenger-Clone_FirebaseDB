import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const SendMessage = (event) => {
    //all the logic to send a message
    // setMessages([...messages, { username: username, text: input }]);
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    event.preventDefault();
  };

  return (
    <div className="App">
      <br />
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="messenger logo"
      />
      <h1>Learning Fb-Messenger-Clone with Clever Programmer</h1>

      <form action="" className="app__form">
        <FormControl className="app__formControl" >
          <InputLabel htmlFor="my-input">Enter a message....</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          
        </FormControl>
        <IconButton
            variant="contained"
            color="primary"
            disabled={!input}
            type="submit"
            onClick={SendMessage}
          >
            <SendIcon/>
          </IconButton>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} user={username} mssg={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
