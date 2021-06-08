const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    // var authors= [
        //     {
        //         name: "Joseph Annamkutty Jose",
        //         position:"Actor",
        //         img: "jaj.jpg",
        //         desc:"An author, vlogger, motivational speaker and a social influencer, Joseph has been actively lending his voice for many anti-drug and menstrual hygiene campaigns in Kerala. Joseph, who works at Radio Mirchi as a RJ became popular after his video 'I am the Change' went viral. The video, which went up on his Facebook page on 27th February 2017, received words of appreciation from many."
        //     },
        //     {
        //         name: "Chetan Bhagat",
        //         position:"Indian author",
        //         img: "cb.jpg",
        //         desc:"Chetan Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazine's list of World's 100 Most Influential People in 2010. Bhagat graduated in mechanical engineering at IIT Delhi and completed a master's of business administration degree at IIM Ahmedabad."
    
        //     },
        //     {
        //         name: "Ravinder Singh",
        //         position:"Author",
        //         img: "rs.jpg",
        //         desc:"Ravinder Singh (born 4 February 1982) is an Indian software engineer and author of nine novels — I Too Had a Love Story, Can Love Happen Twice?, Like it happened Yesterday, Love Stories That Touched My Heart, Tell Me A Story, Your Dreams are Mine Now , This Love That Feels Right, Will You Still Love Me and The Belated Bachelor Party. He started his career as an IT professional in Infosys. His girlfriend died in 2007 before they got formally engaged. He adapted his own story into his first novel I Too Had a Love Story which was published in 2008. Writing the book helped him cope with the tragedy in his life. This novel was reviewed by N R Narayana Murthy, Chairman Emeritus of Infosys Technologies, who called it Simple, honest and touching. "
        //     }
    authorsRouter.get('/', function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors", 
            {
                nav,
                title: 'Library',
                authors
            });
        })
    });
    
    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render('author', {
                nav,
                title: 'Library',
                author
            });
        })
    });

    return authorsRouter;
}

module.exports = router;