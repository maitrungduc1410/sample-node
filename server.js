const express = require("express");
const app = express();
const port = 3000;
const os = require('os');

app.get("/", (req, res) => {
  const message = `Hostname: ${os.hostname()}`
  console.log(message)
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
