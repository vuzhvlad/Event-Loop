const EventEmitter = require("events"); // module for working with events
const http = require("http");

class Sales extends EventEmitter {
  // creating a class that inherits event
  constructor() {
    super();
  }
}

const myEmitter = new Sales(); // getting our own event

myEmitter.on("newSale", () => {
  // creating a listener for our event
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Vlad");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left`);
});

myEmitter.emit("newSale", 9); // emitting our event

/////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  // event on request
  console.log("Request recieved!");
  console.log(req.url);
  res.end("Request revieved");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  // event on closing
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
