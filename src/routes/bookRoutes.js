const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){

    // var books = [
    //     {
    //         title: "Daivathinte Charanmar",
    //         author: "Joseph Annamkutty Jose",
    //         genre:"Biography",
    //         img:"charanmar.jpg",
    //         des:"Daivathinte Charanmar is a Malayalam book written by RJ, Actor and Motivational Speaker Joseph Annamkutty Jose. Through the book he tries to thank different people who helped him at some point in his life one way or the other. He believes that these people were put into his life by God himself."
    //     },
    //     {
    //         title:"Half Girlfriend",
    //         author: "Chetan Bhagat",
    //         genre:"Fiction",
    //         img:"half.jpg",
    //         des:"The novel reflects his struggle, helplessness and success to get the goals of his life. The novel starts with the interaction between Chetan Bhagat and Madhav Jha in a hotel. The interaction between them inspires the author to convert the story into a novel which is known by the name of Half Girlfriend."
    //     },
    //     {
    //         title:"I Too Had a Love Story",
    //         author: "Ravinder Singh",
    //         genre:"Novel",
    //         img:"love.jpg",
    //         des:"Ravin and Khushi's love story is the central theme of this book, and it stands out brightly. The honesty with which Ravin recounts the story is refreshing, and his feelings and emotions reflect clearly in the narration. Considering this is a real life story, I feel sympathetic towards the author."
    //     }
    // ]
    booksRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books", 
            {
                nav,
                title: 'Library',
                books
            });
        })
    });
    
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book', {
                nav,
                title: 'Library',
                book
            });
        })
    });
    
    return booksRouter;
}

module.exports = router;