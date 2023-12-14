const express = require ("express");
const app = express();

// console.log(app);
let port = 3000; 
app.listen(port,()=>{
    console.log(`app listining on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);// alots of methods to log into the terminal
//     console.log("req received and congrats the server is working absolutely fine !!");
//     // res.send("this is the first responce sent by the programmer !")// this is taken as the normal string
//     res.send ({
//         name :"Akshat",
//         marks :100,
//         hobbyy : "hacking"
//     }) // I know this is the obj in js but express will convert it into the form of json (Akshat--- we can also send the html code and it will actual work like an html real one )
    
// });

app.get("/:hello",(req,res)=>{
    let {msg}=req.params;
    res.send(`hello this is akshat and this is the basic response to the client${msg}`);
});


app.get("/",(req,res)=>{
    let {hey}=req.params;
    res.send(`hello${hey}`);
});


app.get("/things",(req,res)=>{
    // let{things}=res.params;
    res.send(`hello this is things`)
}); ""