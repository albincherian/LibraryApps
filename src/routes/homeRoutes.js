const express = require('express');
const homeRouter = express.Router();

function router(nav){
    var users = []
    homeRouter.get('/', function(req,res){
        res.render("home", 
        {
            nav,
            title: 'Library'
        });
    });

    return homeRouter;
}

module.exports = router;