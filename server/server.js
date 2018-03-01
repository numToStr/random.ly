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

  client.on("disconnect", () => {
    console.log("User Disconnected.");
  });

  client.on("createEmail", data => console.log(data));

  client.emit("newEmail", {
    from: "vikasraj1911@gmail.com",
    text: "What is happening?",
    createdAt: new Date()
  });
});
