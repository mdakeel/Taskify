const express = require("express");
import http = require("http");
import { Server, Socket } from "socket.io";
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://192.168.3.181:3001",
  })
);
//

const httpServer = http.createServer(app);
const 

const io = new Server(httpServer, {
  cors: {
    origin: "http://192.168.3.181:3001",
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 5 * 60 * 1000,
    skipMiddlewares: true,
  },
});
const connection: any = {};

io.on("connection", (socket) => {
  console.log(socket.id);
  io.emit("connection", "cool");
  io.on("room", (data) => {
    console.log("data", data);
  });
});

httpServer.listen(8081, () => {
  console.log("Server Started on PORT NO: ", 8081);
});
