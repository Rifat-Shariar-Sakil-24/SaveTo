const express = require("express");
const bodyParser = require("body-parser");

const app = express();


let tasks = [];
let workTasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , function(req,res){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];

    res.render('index', {Title: day, taskshtml:tasks});
})


app.get("/works", function(req,res){
    res.render('index', {Title: "Works", taskshtml: workTasks});
})



app.post("/", function(req,res){
    let task = req.body.taskform;
    let taskType = req.body.submit;

    if(taskType == "Works"){
        workTasks.push(task);
        res.redirect("/works");
    }
    else {
        tasks.push(task);
        res.redirect("/");
    }
    
    console.log(req.body);
    
})




app.listen(4000, function(){
    console.log("server is running on port 4000");
})