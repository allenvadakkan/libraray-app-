const express=require('express');

const adminRouter=express.Router();
const bookdata=require('../model/Bookdata'); // to access bookdata

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'library'
        })
    });

    adminRouter.post('/add',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            about_author:req.body.about_author,
            genre:req.body.genre,
            cover:req.body.cover,
            author_image:req.body.author_image,
            description:req.body.description
        }
        var book=bookdata(item); //return data from the bookdata is saved
        book.save();    //to save it to database
        res.redirect('/books');  //redirect to books page after saved in database
    });
    return adminRouter;
}

module.exports=router;
