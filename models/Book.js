// Import mongoose
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Construct Book collection schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

// Create Book model
const Book = mongoose.model("Book", BookSchema);

// Export Book model
module.exports = Book;