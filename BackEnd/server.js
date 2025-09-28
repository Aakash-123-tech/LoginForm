const express = require('express');
const cors =require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(email=== "Aakash123@gmail.com" && password=== "Aakash@123" ){
       res.json({success:true});
    }
    else{
        res.json({success:false});
    }
});
app.listen(5000,()=> console.log("Server is running  successfully.......")
);

