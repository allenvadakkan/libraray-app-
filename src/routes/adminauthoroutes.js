const express = require("express");
const bookdata = require("../model/Bookdata");
const adminauthorsRouter = express.Router();

function router(nav) {
  
    // const authors = require('../data/data.json');

    adminauthorsRouter.get("/", (req, res) => {
      bookdata.find()
      .then(function(book_catalogue){
        res.render("authors", {
          nav,
          title: "Library App - Authors",
          book_catalogue,
        });
      });
  
    });

    adminauthorsRouter.get("/:id", (req, res) => {
      const id = req.params.id;
      bookdata.findOne({_id:id})
      .then(function(book){
  
        res.render("author", {
          nav,
          book,
      });
  
      });
    });
  

  
    return adminauthorsRouter;
  }
  
  module.exports = router;
  