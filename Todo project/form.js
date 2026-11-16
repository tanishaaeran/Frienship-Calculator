    let username = document.querySelector("#username");
let btn = document.querySelector("button");
let form = document.querySelector("form");
let arr = [];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    AddTodo();
    DisplayTodo();
})
function AddTodo(){
    console.log(username.value);
    arr.push(username.value);
    username.value = ""
}
function DisplayTodo(){
    let alltodo = document.querySelector("#todo");
    alltodo.innerHTML="";
     arr.forEach((element, index)=>{
        alltodo.innerHTML += `<li> ${element} <button onclick="Delete(${index})"> Delete </button> </li>`
    })
}
function Delete(index){
    arr.splice(index,1);
    DisplayTodo();
}
