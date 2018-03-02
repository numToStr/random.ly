const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const { generateMsg } = require("./utils/message");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

io.on("connection", client => {
  console.log("New User Connected.");

  client.emit("newMessage", generateMsg("ADMIN", "Welcome to the Chat room."));

  client.broadcast.emit("newMessage", generateMsg("ADMIN", "<User> joined"));

  client.on("createMessage", (msg, callback) => {
    io.emit("newMessage", generateMsg(msg.from, msg.text));
    callback("Succesfull");
  });

  client.on("disconnect", () => {
    console.log("User Disconnected.");
  });
});
