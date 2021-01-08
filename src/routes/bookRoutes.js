const express = require("express");
const booksRouter = express.Router();

function router(nav) {
  
  const book_catalogue = require('../data/data.json');

  booksRouter.get("/", (req, res) => {
    res.render("books", {
      nav,
      title: "Library App - Books",
      book_catalogue,
    });
  });

  booksRouter.get("/:id", (req, res) => {
    const id = req.params.id;

    res.render("book", {
      nav,
      book: book_catalogue[id],
    });
  });

  return booksRouter;
}

module.exports = router;
