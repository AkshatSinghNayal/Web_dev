heading = document.querySelector("h1");
function colorChange (color,delay){
    return new Promise ((resolve , reject )=>{
        setTimeout(() => {
            let rej =Math.floor(Math.random()*5)+1;
            if(rej<3){
                reject();
            }
            heading.style.color=color;
            console.log(`color of the thing is ${color}`);
            resolve();
        }, delay);
    })
}

async function demo (){
   try{await colorChange("green",1000)
   await colorChange("orange",1000)
   await colorChange("yellow",1000)
   await colorChange("greeen",1000)
   await colorChange("blue",1000)
}catch(err){
    console.log("error caught !!")
    console.log(err);
}
let a=3;
console.log(a)
}
