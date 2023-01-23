const express = require("express");
const multer = require('multer');
const { multipleUpload, singleUpload } = require('./middleware/multerConn');
require('dotenv').config();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// other middlewares and routes

app.use('/multiple-upload', multipleUpload('files'));
app.use('/single-upload', singleUpload('file'));

// Routes
app.use('/', require('./routes/upload'));

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
