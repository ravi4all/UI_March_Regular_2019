window.addEventListener("load", initEvent);
var num_1;
var num_2;

function initEvent() {
    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");
    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    // console.log(event.srcElement.innerHTML);
    var opr = event.srcElement.innerHTML;
    var expression = num_1.value + opr + num_2.value;
    var result = eval(expression);
    // var result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").value = result;
}