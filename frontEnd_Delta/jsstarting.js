// const arr = [1 ,2 ,3 , 4, 5];

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);


// let arr = [1,2,3,4,5,6];

// let double = arr.map((el)=>{
//     return el*el;
// })  


// let arr = [1,2,3,4,5,6];

// let filterfunc = arr.filter((el)=>{

//     return el%2==0;

// })

// let arr = [1,2,3,4,5,6];
//     return arr.every((el)=>{
//  })

// let arr = [1,2,3,4,5,6,8,9,8,7,98];

// let max = -1 ;

// for(let i=0; i<arr.length;i++){
//     if( max <arr[i]){
//         max = arr[i];
//     }

// }
// console.log(max);



// let arr = [1,,6,7,8,9,7,5,4,8,98,9,]

// let max = arr.reduce((max, el)=>{
//     if (max<el){
//         return el;
//     }
//     else {
//         return max;
//     }
// })
// console.log(max);


// let num = [1,2,3,4,55,4,-9]

// let min = num.reduce((min , el )=>{
//     if ( min<el){
//         return min ;
//     }else{
//         return el ;
//     }
// })

// console.log(min);


// let arr = [2,3,4,5,6,987,4,4,1,2,3,9,87]

// console.log(Math.max(...arr));
// console.log(...arr);

// let data ={
//     email: "aaisamatkaro@gmail.com",
//     data:"akshat"

// };

// let datacopy={
//     ...data , id : 1212
// };
// console.log(datacopy);

// function sum(...args) {
//     return args.reduce((sum,el)=>
//     sum+el

// );}

let para = document.createElement("p");
para.innerText= "Hey im red and i am here to listen you !!";
document.querySelector("body").append(para);
para.classList.add("red");


let heading = document.createElement("h3");
heading.innerText = "hey im h3 heading which contains blue letter";
document.querySelector("body").append(heading);
heading.classList.add("blue");


let box = document.createElement("div");
document.querySelector("body").append(box);
box.classList.add("div");

let heading1 = document.createElement("h1");
heading1.innerText = "I'm a div";
document.querySelector("div").append(heading1);

let paragraph = document.createElement("p");
paragraph.innerText = "Mee too!!";
document.querySelector("div").append(paragraph);



// const arr = [
//   {
//     name: "akshat",
//     marks: 100,
//   },
//   {
//     name: "saksham",
//     marks: "99.9999",
//   },
//   {
//     name: "deepanshu",
//     marks: 99,
//   },
// ];


// arr.forEach((student)=>{
//     console.log(`The marks of the student ${student.marks} and the name of the student is ${student.name}`)
// });


// console.log("Hello, this is Akshat");

// setTimeout(() => {
//     console.log("Welcome to his empire");
// }, 4000);

// console.log("A very good programmer known for his work");

// let arr =[1,32,123,42]

// let double =arr.map ((el)=>{
//     return el*el ; 
// })

// console.log(double);

// 
// let arr = [2,4135,354,6846,534,3132,1654,313,16,13213]
// 
// let final = arr.filter((element)=>{
//    return element%2==0;
// });
// 
// console.log(final);