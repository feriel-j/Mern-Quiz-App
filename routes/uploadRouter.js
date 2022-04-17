const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: fileStorageEngine });

uploadRouter.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send(`/uploads/${req.file.filename}`);
});

module.exports = uploadRouter;
