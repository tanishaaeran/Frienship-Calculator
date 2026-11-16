let home=document.querySelector("#home");
let blogs=document.querySelector("#blogs");
let contact=document.querySelector("#contact");
let page=document.querySelector("div");
let darkbutton=document.querySelector("#dark");
let lightbutton=document.querySelector("#light");
let body=document.querySelector("body");

darkbutton.addEventListener("click",(e)=>{
      body.classList.toggle("dark");
})
home.addEventListener("click",(e)=>{
    e.preventDefault();
   page.innerText = "home page";
});

blogs.addEventListener("click",(e)=>{
    e.preventDefault();
   page.innerText = "blog page";
});

contact.addEventListener("click",(e)=>{
    e.preventDefault();
   page.innerText = "contact page";
});