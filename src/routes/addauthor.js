const express=require('express');
const addauthorRouter=express.Router();

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'library'
        })
    })
    addauthorRouter.get('/add',function(req,res){
        res.send("Hey i am added");
    })
    return addauthorRouter;
}

module.exports=router;
