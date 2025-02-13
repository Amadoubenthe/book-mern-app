const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bookRoutes = require("./src/routes/book.route");

dotenv.config();
const app = express();

const port = process.env.PORT || 8000;
const dbUrl = process.env.DB_URL;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}
