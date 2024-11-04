let btn1 = document.querySelector(".btn1");
let btn2  = document.querySelector(".btn2");
let para = document.querySelector(".para");
let body = document.querySelector("body");

btn1.addEventListener("click" , ( ) =>{
    body.style.backgroundColor = "white";
    para.style.color = "black";
    alert("As Bright As Color White");
})

btn2.addEventListener("click" , ( ) =>{
    body.style.backgroundColor = "black";
    para.style.color = "white";
    alert("As Dark As Color Black");
})