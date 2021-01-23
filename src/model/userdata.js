const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:<password>@ictakfiles.old1v.mongodb.net/<dbname>?retryWrites=true&w=majority');

const Schema=mongoose.Schema;

const userschema= new Schema(
    {


        name:String, 
        email:String, 
        Phonenumber:String,      
        password:String,     
        dob:String,       
        country:String,   
        gender:String
    }
);
 var userdata=mongoose.model('userdata',userschema);

 module.exports=userdata;