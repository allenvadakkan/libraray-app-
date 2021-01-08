const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
  
    const authors = require('../data/data.json');

    authorsRouter.get("/", (req, res) => {
      res.render("authors", {
        nav,
        title: "Library App - Authors",
        authors,
      });
    });
  
    authorsRouter.get("/:id", (req, res) => {
      const id = req.params.id;
  
      res.render("author", {
        nav,
        author: authors[id],
      });
    });
  
    return authorsRouter;
  }
  
  module.exports = router;
  