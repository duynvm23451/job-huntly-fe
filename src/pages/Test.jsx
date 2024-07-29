// src/WebSocketClient.js
import React, { useEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useRouteLoaderData } from "react-router-dom";

const Test = () => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const connectWebSocket = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.debug = () => {};

    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);

      stompClient.subscribe("/topic/messages", (message) => {
        console.log(JSON.parse(message.body));
      });

      setClient(stompClient);
    });
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);

  const sendMessage = () => {
    if (client) {
      const messagePayload = JSON.stringify({
        destinationId: 1,
        message,
        loggedInUserId: 28,
      });
      client.send("/app/chat", {}, messagePayload);
      setMessage("");
    }
  };

  return (
    <div className="h-screen mt-40">
      <h1>WebSocket Chat</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
