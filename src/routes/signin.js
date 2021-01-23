const express=require('express');
const signin=express.Router();

function router(nav){
    signin.get('/',function(req,res){
        res.render('signin',{
            nav,
            title:'library'
        })
    })
    signin.post('/',function(req,res){
        res.render('signin',{
            nav,
            title:'library'
        })
    })
    signin.get('/success',function(req,res){
        res.render('addbook',{
            nav,
            title:'library'
        })
    })

    return signin;
}

module.exports=router;