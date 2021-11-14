const gateway = require("fast-gateway");

const server = gateway({
  routes: [
    {
      prefix: "/user",
      target: "http://127.0.0.1:8000",
    },
    {
      prefix: "/order",
      target: "http://127.0.0.1:8002",
    },
    {
      prefix: "/payment",
      target: "http://127.0.0.1:8001",
    },
  ],
});

server.get("/api-gateway", (req, res) => {
  res.send("API gateway is running");
});

const PORT = 8003;
server.start(PORT).then((server) => {
  console.log(`API gateway server started on port ${PORT}`);
});
