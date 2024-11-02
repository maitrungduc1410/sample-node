const express = require("express");
const app = express();
const port = 3000;
const os = require('os');

app.get("/", (req, res) => {
  res.send(`Hostname: ${os.hostname()}, V1`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
