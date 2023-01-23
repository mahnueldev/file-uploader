const express = require('express');
const router = express.Router();
const { multipleUpload, singleUpload } = require('../middleware/multerConn');
const db = require('../models');

// create main Model
const File = db.File;

router.post('/multiple-upload', multipleUpload('files'), async (req, res) => {
  const files = req.files;
  try {
    // do something with the uploaded files, for example, save them to the database
    await File.bulkCreate(
      files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        mimetype: file.mimetype,
      }))
    );
    res.send('Files uploaded successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/single-upload', singleUpload('file'), async (req, res) => {
  const file = req.file;
  try {
    // do something with the uploaded file, for example, save it to the database
    await File.create({
      originalname: file.originalname,
      filename: file.filename,
      mimetype: file.mimetype,
    });
    res.send('File uploaded successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
