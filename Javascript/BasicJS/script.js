// Event Binding

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", showName);
}

function showName() {
    username = document.getElementById("name");
    document.getElementById("output").innerHTML = username.value;
}