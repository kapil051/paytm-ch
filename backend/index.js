const express= require("express");


  const app=express();

    const port=3000;

    app.use(express.json());  
  
      

     app.get('/',(req,res)=>{  
            res.send("hello from backend");
     })



  app.use((err,req,res,next)=>{
        res.status(404).json({"msg":"invalid input from last handler"});
           next();
  })

app.listen(port,()=>{
      console.log(`app listening on the port ${port}`);
}) 



