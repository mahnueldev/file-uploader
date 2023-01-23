const express = require("express");
const app = express();
const multer = require('multer');
const { multipleUpload, singleUpload } = require('./middleware/multerConn');
require('dotenv').config();
const PORT = process.env.PORT || 5050;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const uploadRoutes = require('./routes/upload');
app.use('/', uploadRoutes);

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
