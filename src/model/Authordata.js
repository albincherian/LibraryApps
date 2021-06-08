 //Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    popularbook : String,
    image : String
});

 //model creation
var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports =  Authordata;