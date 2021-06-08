const express = require('express');
const signupRouter = express.Router();

const Userdata = require('../model/Userdata');

function router(nav1,nav2){
    signupRouter.get('/', function(req,res){
        nav=nav2;
        res.render("signup", 
        {
            nav,
            title: 'Library'
        });
    });

    signupRouter.post('/', function(req,res)
            {
                 var item = {
                    name : req.body.name, 
                    email : req.body.email,
                    pwd : req.body.pwd, 
                    cmpwd : req.body.cmpwd};
                var user = Userdata(item);
                user.save();
                nav=nav2;     
                res.render("login", 
                {
                    nav,
                    title: 'Library'
                });
            });
    

    return signupRouter;
}

module.exports = router;