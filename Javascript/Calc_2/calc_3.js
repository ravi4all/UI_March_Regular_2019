window.addEventListener("load", initEvents);

var textBox;
var span;

function initEvents(){
    textBox = document.getElementById("operations");
    span = document.getElementById("expression");
    var div = document.getElementById("buttons");

    for(var i = 0; i<=9; i++){
        var btn = document.createElement("button");
        btn.innerHTML = i;
        btn.className = 'btn';
        div.appendChild(btn);
        btn.addEventListener("click", appendValue);
    }

    var buttons = document.getElementsByClassName("opr");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", toEvalute);
    }

}

function appendValue(){
    textBox.value += event.srcElement.innerHTML;
}

function toEvalute(){
    var opr = event.srcElement.innerHTML;
    textBox.value += opr;
    span.innerHTML += textBox.value;
    textBox.value = "";
}