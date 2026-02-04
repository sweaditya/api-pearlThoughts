const express = require("express");
const app = express();

// HELLO API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello API is working 🚀"
  });
});

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});