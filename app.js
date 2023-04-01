const express=require('express');

const mongoos=require("mongoose")
const app =express();

const morgen =require('morgan')




// mongodb 
const Url='mongodb+srv://radim:radim12345@cluster0.dtfdcof.mongodb.net/gestion?retryWrites=true&w=majority'
mongoos.connect(Url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>app.listen(3001))
.catch((er)=>console.log(er))
// register view engine 
app.set("view engine","ejs")

// listen for request 


// midllware static file
app.use(express.static("public"))
// midllware using morgen 


app.use(morgen("tiny"))

app.use((req,res,next)=>{
    console.log("next middlware");
  
    next();
})
// route
app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

  res.render("index",{blogs})

})
app.get('/about',(req,res)=>{

    res.render("about")

})
// redirect 

app.get('/aboutme',(req,res)=>{

    res.redirect('/about')

})
app.get("/create",(req,res)=>{
    res.render("create")
})

//404 pages


app.use((req,res)=>{
    res.status(404).render("404")

})

// midelware
 



