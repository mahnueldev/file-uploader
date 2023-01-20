
const express = require("express");
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;



//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});