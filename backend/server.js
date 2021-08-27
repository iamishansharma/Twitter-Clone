const express = require("express");
const app = express();
const mongoose = require("./Database");

var listener = app.listen(4000, () => {
  console.log(
    `Twitter Clone Backend Running on Port: ${listener.address().port}`
  );
});
