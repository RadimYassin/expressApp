const express=require('express');


const app =express();




// route
app.get('/',(req,res)=>{

  res.sendFile('./views/index.html',{root:__dirname})

})
app.get('/about',(req,res)=>{

    res.sendFile('./views/about.html',{root:__dirname})

})
// redirect 

app.get('/aboutme',(req,res)=>{

    res.redirect('/about')

})


//404 pages


app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname})

})
// listen for request 

app.listen(3001)
