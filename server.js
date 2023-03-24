const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>{
 console.log(req.method,req.url);

let path='./views/'
switch (req.url) {
    case "/":
        path += "index.html"
        res.statusCode=200
        break;
        case "/about":
            path += "about.html"
            res.statusCode=200
            break;
        case "/aboutme":  
            res.statusCode=301
            res.setHeader('Location','/about')
           
            res.end()      
            //   path += "about.html"
           break;  
    default:
        path += "404.html"
        res.statusCode=404
        break
}

 //set header content type 
 res.setHeader("Content-Type",'text/html');
fs.readFile(path ,(er,data)=>{

  if (er) {
      console.log(er);
      res.end()
  } else {
    //   res.write(data)
      res.end(data)
  }


})

})



server.listen(3000,"localhost",()=>{
    console.log("listing for requests on post 3000");
})