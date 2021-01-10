const express=require('express');
const signup=express.Router();

function router(nav){
    signup.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'library'
        })
    })
    signup.get('/success',function(req,res){
        res.send("sucessfull");
    })
    return signup;
}

module.exports=router;