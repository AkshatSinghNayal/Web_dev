let url = "https://catfact.ninja/fact"

// async function data (){
    //     let hey = await fetch(url);
    //    console.log(hey);
    //    let getData = await hey.json();
    //    console.log(getData);
    // }
    
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})

.then((data)=>{
    console.log(data.fact)
    return fetch(url);
    
})
.then((res)=>{
    return res.json();
    
})
.then((data2)=>{
    console.log(data2.fact);
})
.catch((err)=>{
    console.log("err caught",err);
})