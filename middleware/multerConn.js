const multer = require("multer");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/"); // make sure the directory 'uploads' exists
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

const multipleUpload = (fieldName) => upload.array(fieldName, 12);
const singleUpload = (fieldName) => upload.single(fieldName);

module.exports = { multipleUpload, singleUpload };
