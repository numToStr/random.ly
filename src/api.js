import openSocket from "socket.io-client";

const socket = openSocket(window.location.protocol + "//localhost:5000");

export const subscribeToTimer = callback => {
  socket.on("timer", timestamp => {
    callback(null, timestamp);
  });
  socket.emit("subscribeToTimer", 1000);
};
