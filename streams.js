const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 the problem that it will be saved and app can break if it is a big one
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Solution 2 streming the content from the file to a server
  //   const readable = fs.createReadStream("test-fil.txt"); // creating reading stream
  //   readable.on("data", (chunk) => {
  //     res.write(chunk); // writing the data to a client
  //   });
  //   readable.on("end", () => {
  //     // ending the stream
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500; // server error 500
  //     res.end("File not found!");
  //   });
  //Solution 3
  const readable = fs.createReadStream("test-file.txt"); // creating reading stream
  readable.pipe(res); // using pipe
  // readableSource.pipe(writableDestination) - data the we pipe into writable destination
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
