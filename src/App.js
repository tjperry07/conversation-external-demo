import React from "react";
import "./styles.css";
import "@nylas/components-conversation";
import { mockedMessages } from "./staticData.js";

export class App extends React.Component {
  componentDidMount() {
    const conversation = document.getElementsByTagName("nylas-conversation")[0];
    conversation.messages = mockedMessages;
  }
  render() {
    return (
      <div className="App">
        <nylas-conversation show_avatars="true" show_reply="true" />
      </div>
    );
  }
}
