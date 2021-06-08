const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

const multer = require('multer');

const storage = multer.diskStorage({
    //destination for files
    destination: function (req, file, callback) {
        callback(null, './public/uploads/images');
    },

    //add back the extension
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

//upload parameters for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

function router(nav){
    //Book Controls

    adminRouter.get('/addbook', function(req,res){
        res.render("addbook", 
        {
            nav,
            title: 'Library'
        }); 
    });

    adminRouter.post('/addbook',upload.single('image'), function(req,res){
        var item = {
             title : req.body.title,
             author : req.body.author,
             genre : req.body.genre, 
             image : req.file.filename,
            };
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });
    
    adminRouter.get('/updatebook/:id', upload.single('image'), function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('updatebook', {
                nav,
                title: 'Library',
                book
            });
        })
    });
    
    adminRouter.post('/updatebook/:id', upload.single('image'), function(req,res){
        const id = req.params.id;
        let book = {}
        if (req.body.title) book.title = req.body.title
        if (req.body.author) book.author = req.body.author
        if (req.body.genre) book.genre = req.body.genre
        if (req.file.filename) book.image = req.file.filename
        book = { $set: book }
        Bookdata.updateOne({_id: id},book)
        .then(function(){
            res.redirect('/books');
        })
    });
    
    adminRouter.get('/deletebook/:id', function(req,res){
        const id = req.params.id;
        Bookdata.remove({_id: id})
        .then(function(){
            res.redirect('/books');
        })
    });

    // Author Controls

    adminRouter.get('/addauthor', function(req,res){
        res.render("addauthor", 
        {
            nav,
            title: 'Library'
        }); 
    });

    adminRouter.post('/addauthor', upload.single('image'), function(req,res){
        var item = {
            name : req.body.name, 
            popularbook : req.body.popularbook, 
            image : req.file.filename};
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });

    adminRouter.get('/updateauthor/:id', upload.single('image'), function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('updateauthor', {
                nav,
                title: 'Library',
                author
            });
        })
    });
    
    adminRouter.post('/updateauthor/:id', upload.single('image'), function(req,res){
        const id = req.params.id;
        let author = {}
        if (req.body.name) author.name = req.body.name
        if (req.body.popularbook) author.popularbook = req.body.popularbook
        if (req.file.filename) author.image = req.file.filename
        author = { $set: author }
        Authordata.updateOne({_id: id},author)
        .then(function(){
            res.redirect('/authors');
        })
    });

    adminRouter.get('/deleteauthor/:id', function(req,res){
        const id = req.params.id;
        Authordata.remove({_id: id})
        .then(function(){
            res.redirect('/authors');
        })
    });

    return adminRouter;
}

module.exports = router;