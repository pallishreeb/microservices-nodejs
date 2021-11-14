const express = require("express");
const app = express();

app.get("/dopayment", (req, res) => {
  res.status(200).json({ msg: "payment added successfully!" });
});

app.get("/mypayment/:id", (req, res) => {
  res.status(200).json({ msg: "Fetched your payment" });
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`payment server started on port ${PORT}`);
});
