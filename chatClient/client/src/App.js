import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
function App() {
  const [Socket, setSocket] = useState("");
  useEffect(() => {
    const SOCKET_SERVER_URL = "http://127.0.0.1:8081"; // Replace with your Socket.io server URL
    const socket = io(SOCKET_SERVER_URL);
    setSocket(socket);
    socket.on("connection", (data) => {
      console.log("Connected to the server", data);
    });

    // socket.emit("test", socket);
  }, []);

  const [room, setRoom] = useState("");
  const [msg, setmsg] = useState("");
  const handleConnect = () => {
    Socket.emit("room", room);
  };
  const sendMessage = () => {
    Socket.emit("send-message", { room, msg });
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Select Room "
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={handleConnect}>Connect</button>

      <input type="text" value={msg} onChange={(e) => setmsg(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
