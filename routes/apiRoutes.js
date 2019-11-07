const axios = require("axios");
const API_KEY = "AIzaSyBxiBZEwQSlfF9cbWayfIEyi3WvqLOSzCo";

module.exports = (app, db) => {

    app.get("/api/search/:term", (req, res) => {
        let uri = `https://www.googleapis.com/books/v1/volumes?q=${req.params.term}&key=${API_KEY}`;

        axios
            .get(uri)
            .then(results => {res.json(results.data);})
            .catch(err => {res.status(422).json(err);});
    });

    // Returns all saved books in JSON format
    app.get("/api/books", (req, res) => {
        db.Book.find({}).then(data => {
            res.json(data);
        }).catch(error => {
            res.send(error);
        });
    });

    // Saves a new book document
    app.post("/api/books", (req, res) => {
        db.Book.insert({
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        }).then(bookDB => {
            res.send(bookDB);
        }).catch(error => {
            res.send(error);
        });
    });

    // Deletes a saved book, specified by ID
    app.delete("/api/books/:id", (req, res) => {
        db.Book.deleteOne({
            _id: req.params.id
        }).then(() => {
            res.status(200);
        }).catch(error => {
            res.send(error);
        });
    });
};