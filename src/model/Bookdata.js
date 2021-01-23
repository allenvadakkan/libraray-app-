const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.old1v.mongodb.net/library?retryWrites=true&w=majority');

const Schema=mongoose.Schema;

const bookschema= new Schema(
    {
        title:String,
        author:String,
        about_author:String,
        genre:String,
        cover:String,
        author_image:String,
        description:String
    }
);
 var bookdata=mongoose.model('bookdata',bookschema);

 module.exports=bookdata;