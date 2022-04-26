const express = require("express");
const { rateLimiter } = require("./middlewares/rateLimiter");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", rateLimiter, (req, res) => {
  res.send("Server is active");
});

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
