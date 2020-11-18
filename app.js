const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.send('Wecome to home page');
})

app.get('/contact', function(req,res){
    res.send('This is the contact page for Adhav');
})

app.get('/profile/:name', function(req,res){
    
    var data = { age: 9, interest: 'nice', hobbies:['play', 'read', 'movie'] };
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000,'localhost', ()=>{console.log('server is listening in port 3000...')})