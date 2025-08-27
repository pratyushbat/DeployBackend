const express = require("express");
const app = express();
const todoRoute=require('./routes/todos');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.use('/public',express.static(__dirname+"/public"));

app.use('/todos',todoRoute);
app.get('/',(req,res)=>res.send('hello from backend'));


app.listen(3333, () => console.log("server staretd on 3333"));