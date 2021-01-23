const express = require("express");
const bookdata = require("../model/Bookdata");
const adminbooksRouter = express.Router();

function router(nav) {
  
  // const book_catalogue = require('../data/data.json');

  adminbooksRouter.get("/", (req, res) => {
    bookdata.find()
    .then(function(book_catalogue){
      res.render("books", {
        nav,
        title: "Library App - Books",
        book_catalogue,
      });
    });

  });

  adminbooksRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    bookdata.findOne({_id:id})
    .then(function(book){

      res.render("book", {
        nav,
        book,
    });

    });
  });

  return adminbooksRouter;
}

module.exports = router;
