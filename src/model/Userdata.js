 //Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//Schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String,
    email : String,
    pwd : String
});

 //model creation
var Userdata = mongoose.model('userdata', UserSchema);

module.exports =  Userdata;