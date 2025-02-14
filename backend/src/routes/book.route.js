const express = require("express");
const {
  addBook,
  getBooks,
  getBookById,
} = require("../controllers/book.controller");

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);

module.exports = router;
