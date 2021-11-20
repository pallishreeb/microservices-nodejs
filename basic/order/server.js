const express = require("express");
const app = express();

app.get("/makeorder", (req, res) => {
  res.status(200).json({ msg: "Order placed successfully " });
});

app.get("/myorders/:id", (req, res) => {
  res.status(200).json({ msg: "Fetched your order history" });
});

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`Order server started on port ${PORT}`);
});
