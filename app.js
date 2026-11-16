let button =document.querySelector("#btn")
let para=document.querySelector(".para");
let clear = document.querySelector("#clear")

button.addEventListener("click",(e)=>{
    console.log(e);
   para.innerText = "hi i am tanisha";
});


clear.addEventListener("dblclick",(e)=>{
    console.log(e);
    para.innerText="";
});