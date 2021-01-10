const express=require('express');
const adminRouter=express.Router();

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'library'
        })
    })
    adminRouter.get('/add',function(req,res){
        res.send("Hey i am added");
    })
    return adminRouter;
}

module.exports=router;
