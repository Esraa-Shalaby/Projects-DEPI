let inputBox =document.getElementById('input-box');
let list  =document.getElementById('list');
let btn = document.getElementById("btn");
var li= null;
var arr = [];
function addTask() {
    btn.innerHTML="Add";
    if (inputBox.value ==='') {
        alert("You must write something");
    } 
    else if (arr.includes(inputBox.value)) {
        inputBox.value = "";
    }
    else {
        arr.push(inputBox.value);
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash  delet"></i> <i class="fa-solid fa-pen edit"></i>';
        li.appendChild(span);
        inputBox.value = "";
    }
}
list.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } 

    else if (e.target.classList.contains("delet")) {
        e.target.parentElement.remove();
    }
    else if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement.parentElement;
    inputBox.value = li.firstChild.textContent;
    btn.innerHTML = "Update";
    addTask();
}
});