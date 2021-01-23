
const express=require('express');
const signup=express.Router();
const userdata=require('../model/userdata'); // to access bookdata
function router(nav){
    signup.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'library'
        })
    })
    signup.post('/success',function(req,res){
        var item={
            name:req.body.name,
            Phonenumber:req.body.Phonenumber,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword,
        }
        

        var user=userdata(item); //return data from the bookdata is saved
        user.save();    //to save it to database
        res.redirect('/books');  //redirect to books page after saved in database
    });
    return signup;
}

module.exports=router;
