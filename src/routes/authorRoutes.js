const express = require("express");
const bookdata = require("../model/Bookdata");
const authorsRouter = express.Router();

function router(nav) {
  
    // const authors = require('../data/data.json');

    authorsRouter.get("/", (req, res) => {
      bookdata.find()
      .then(function(book_catalogue){
        res.render("authors", {
          nav,
          title: "Library App - Authors",
          book_catalogue,
        });
      });
  
    });

    authorsRouter.get("/:id", (req, res) => {
      const id = req.params.id;
      bookdata.findOne({_id:id})
      .then(function(book){
  
        res.render("author", {
          nav,
          book,
      });
  
      });
    });
  

  
    return authorsRouter;
  }
  
  module.exports = router;
  