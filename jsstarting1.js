let div = document.querySelector(".box");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div was clicked");
})

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})


for(list of lists){
    lists.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("lists were print");
    })
}   