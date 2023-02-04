const express = require('express')
const http = require('http')


var app = express();
app.use(express.json())

app.listen(3000,(req, res)=>{
 console.log("server is listen port 3000")
 console.log(req.name);
 

  app.get("/"),(req ,res)=>{
  res.send({
    id:1,
   name:"naveed"
  
   
   

   
   });
   
  





  }
})



 



  
