window.addEventListener("load", initEvent);
var num_1;
var num_2;

function initEvent() {
    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");
    document.getElementById("btn_1").addEventListener("click", add);
    document.getElementById("btn_2").addEventListener("click", sub);
    document.getElementById("btn_3").addEventListener("click", div);
    document.getElementById("btn_4").addEventListener("click", mul);
}

function add() {
    var result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").value = result;
}

function sub() {
    var result = parseInt(num_1.value) - parseInt(num_2.value);
    document.getElementById("result").value = result;
}

function div() {
    var result = parseInt(num_1.value) / parseInt(num_2.value);
    document.getElementById("result").value = result;
}

function mul() {
    var result = parseInt(num_1.value) * parseInt(num_2.value);
    document.getElementById("result").value = result;
}