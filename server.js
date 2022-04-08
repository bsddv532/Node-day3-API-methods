
const express = require("express");
const server = express();

server.get("/",(req,res)=>{
     
    res.send("SUCCESS")
})


//Sending the data in two ways

//1. Using Query Params : It passes the multiple key value pairs

server.post("/addUser",(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})



//2. Using URL Params : It passes the single value
server.put("/editUser/:id",(req,res)=>{
    console.log(req.params);
    res.send("SUCCESS")
})


server.listen(3001,() => {
    console.log("Please check your server in localhost:3001");
});



//sending the data:-
// Query Params : name:"DEEpak", age:"12"   key value pair
// url Params :  12  single value,