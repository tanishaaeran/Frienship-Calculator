let person1=document.querySelector("#person1");
let person2=document.querySelector("#person2");
let scoreDiv=document.querySelector("#score");
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name1=person1.value;
    let name2=person2.value;
    let fsScore=Math.floor(Math.random()*100)+1;
    scoreDiv.innerText="💕"+ name1+ "&" + name2 + "\n Your friendship Score\n"+fsScore + "%";
});