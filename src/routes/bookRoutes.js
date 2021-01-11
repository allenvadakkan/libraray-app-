const express = require("express");
const bookdata = require("../model/Bookdata");
const booksRouter = express.Router();

function router(nav) {
  
  // const book_catalogue = require('../data/data.json');

  booksRouter.get("/", (req, res) => {
    bookdata.find()
    .then(function(book_catalogue){
      res.render("books", {
        nav,
        title: "Library App - Books",
        book_catalogue,
      });
    });

  });

  booksRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    bookdata.findOne({_id:id})
    .then(function(book){

      res.render("book", {
        nav,
        book,
    })

    });
  });

  return booksRouter;
}

module.exports = router;
