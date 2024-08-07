const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
