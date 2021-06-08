 //Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//Schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

 //model creation
var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports =  Bookdata;