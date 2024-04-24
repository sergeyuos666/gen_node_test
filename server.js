const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

//midlewere
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("server listining port");
});
