const express = require("express");
const port = process.env.PORT;
const app = express();
const host = process.env.HOST;

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.listen(port, () => {
  console.log(`Started api service on port: ${port}`);
  console.log(`On host ${host}`);
});
