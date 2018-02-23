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

app.get("/api/customers", (req, res) => {
  const customers = [
    { name: "Vikas Raj", age: 21 },
    { name: "Rashika", age: 20 },
    { name: "Gaurav", age: 22 }
  ];

  res.json(customers);
});

io.on("connection", client => {
  console.log("New User Connected.");

  client.on("disconnect", () => {
    console.log("User Disconnected.");
  });

  client.on("subscribeToTimer", interval => {
    console.log("Client is subscribing to timer with interval " + interval);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
  });
});
