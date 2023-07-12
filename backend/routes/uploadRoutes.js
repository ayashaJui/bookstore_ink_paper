import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (req.url.includes("book")) {
      cb(null, "uploads/books/");
    } else if (req.url.includes("author")) {
      cb(null, "uploads/authors/");
    } else if (req.url.includes("blog")) {
      cb(null, "uploads/blogs/");
    } else {
      cb(null, "uploads/");
    }
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/book", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

router.post("/author", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

router.post("/blog", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
