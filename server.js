const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.send("HELLO FROM THE ROOT ROUTE");
})

app.use('/api/todos',todoRoutes);

app.listen(150,function(){
console.log("server runing on port 3000");
})  

