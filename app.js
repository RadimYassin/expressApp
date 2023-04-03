const express=require('express');

const mongoos=require("mongoose")
const app =express();

const morgen =require('morgan')

const Blog =require("./models/blog")


// mongodb 
const Url='mongodb+srv://radim:radim12345@cluster0.dtfdcof.mongodb.net/gestion?retryWrites=true&w=majority'
mongoos.connect(Url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>app.listen(4000))
.catch((er)=>console.log(er))
// register view engine 
app.set("view engine","ejs")

// listen for request 


// midllware static file
app.use(express.static("public"))
// midllware using morgen 

app.use(express.urlencoded({extended:true}))


app.use(morgen("dev"))
app.use((req,res,next)=>{
    console.log("next middlware");
  
    next();
})
// route
app.get('/',(req,res)=>{
    res.redirect("blogs")

})


app.get('/blogs',(req,res)=>{
     Blog.find().sort({ createdAt: -1 })
     .then((result)=>
       res.render("index",{blogs:result})
     )
     .catch((er)=>console.log(er))

})
app.get('/about',(req,res)=>{

    res.render("about")

})
// redirect 

app.get('/aboutme',(req,res)=>{

    res.redirect('/about')

})
app.get("/blogs/create",(req,res)=>{
    res.render("create")
})

//404 pages


app.use((req,res)=>{
    res.status(404).render("404")

})

// midelware
 

