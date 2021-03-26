var webSocket = new WebSocket("wss://localhost:8080");
webSocket.send("Here's some text that the server is urgently awaiting!");
