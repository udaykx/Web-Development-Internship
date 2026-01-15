function changeText() {
    document.getElementById("title").innerText = "DOM Manipulation Website";
}

function changeColor() {
    document.getElementById("description").style.color = "green";
}

function addItem() {
    const li = document.createElement("li");
    li.innerText = "JavaScript";
    document.getElementById("skillList").appendChild(li);
}

function removeItem() {
    const list = document.getElementById("skillList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}