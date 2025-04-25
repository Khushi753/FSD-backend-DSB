// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Book Schema
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  date: String,
  image: String,
});

// Book Model
const Book = mongoose.model("MyBook", BookSchema);

// Base Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Create a new book
app.post("/books", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send("Book Not Found");
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Search books by title (case-insensitive)
app.get("/search", async (req, res) => {
  const { title } = req.query;
  try {
    const books = await Book.find({
      title: { $regex: title, $options: "i" },
    });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Delete book by ID
app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book Not Found");
    res.send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Update book by ID
app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).send("Book Not Found");
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
