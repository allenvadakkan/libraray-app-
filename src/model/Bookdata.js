const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

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