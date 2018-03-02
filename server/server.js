const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

io.on("connection", client => {
  console.log("New User Connected.");

  client.emit("newMessage", {
    from: "ADMIN",
    text: "Welcome to the Chat room.",
    createdAt: new Date().getTime()
  });

  client.broadcast.emit("newMessage", {
    from: "ADMIN",
    text: "<User> joined",
    createdAt: new Date().getTime()
  });

  client.on("createMessage", msg => {
    io.emit("newMessage", {
      from: msg.from,
      text: msg.text,
      createdAt: new Date().getTime()
    });
  });

  client.on("disconnect", () => {
    console.log("User Disconnected.");
  });
});
