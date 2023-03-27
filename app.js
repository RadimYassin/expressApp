const express=require('express');


const app =express();


// register view engine 


app.set("view engine","ejs")

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
// listen for request 

app.listen(3001)
