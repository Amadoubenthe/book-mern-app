const express = require("express");
const { postABook, getAllBooks } = require("../controllers/book.controller");

const router = express.Router();

router.post("/", postABook);
router.get("/", getAllBooks);

module.exports = router;
