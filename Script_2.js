const inputBox = document.getElementById('input-button');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must enter a task to continue");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI")
        e.target.classList.toggle("checked");
    else if (e.target.tagName === "SPAN")
        e.target.parentElement.remove();
    saveData();
},false);

function saveData()
{
    localStorage.setItem("DATA",listContainer.innerHTML);
}

function showTask ()
{
 listContainer.innerHTML = localStorage.getItem("DATA");   
}
showTask();