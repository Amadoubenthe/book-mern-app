const express = require("express");
const { postABook } = require("../controllers/book.controller");

const router = express.Router();

router.post("/", postABook);

module.exports = router;
