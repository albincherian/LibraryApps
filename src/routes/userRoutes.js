const express = require('express');
const userRouter = express.Router();

function router(nav){
    userRouter.get('/', function(req,res){
        res.render("homeuser", 
        {
            nav,
            title: 'Library'
        });
    });

    return userRouter;
}

module.exports = router;