const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { multipleUpload, singleUpload } = require('../middleware/multerConn');
const db = require('../models');

// create main Model
const File = db.File;
// Post Route
router.post('/multiple-upload', multipleUpload('files'), async (req, res) => {
  try {
    const files = req.files;
    // do something with the uploaded files, for example, save them to the database

    await File.bulkCreate(
      files.map((file) => ({
        id: file.id,
        name: file.filename,
        format: file.mimetype,
        url: 'http://localhost:5050/uploads/' + file.filename,
      }))
    );
    res.send('Files uploaded successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/single-upload', singleUpload('file'), async (req, res) => {
  try {
    const file = req.file;
    // do something with the uploaded file, for example, save it to the database
    await File.create({
      name: file.filename,
      format: file.mimetype,
      url: 'http://localhost:5050/uploads/' + file.filename,
    });
    res.send('File uploaded successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});
// Get Route
router.get('/files', (req, res) => {
  File.findAll()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Delete post by id
router.delete('/files/:id', async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).send('File not found');
    }
    await File.destroy({
      where: {
        id: req.params.id,
      },
    });
    fs.unlinkSync(path.join(__dirname, '../uploads', file.name));
    res.send(`File with id ${req.params.id} deleted successfully.`);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
