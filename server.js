const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bangladesh");
});

app.listen(8000, () => {
  console.log(`Server is runnig on port 8000`);
});
