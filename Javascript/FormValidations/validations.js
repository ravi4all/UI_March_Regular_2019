window.addEventListener("load", initEvents);
var username;
var email;
var pwd;
var cpwd;
var rollno;
var span;
var file;

function initEvents() {
    span = document.querySelectorAll("span");
    username = document.querySelector("#box_1");
    username.addEventListener("blur", checkBlank);
    email = document.querySelector("#box_2");
    email.addEventListener("keyup", validateEmail);
    file = document.querySelector("#file")
    file.addEventListener("change", uploadImage);
}

function checkBlank() {
    var str = username.value;
    if (str == "") {
        span[0].innerHTML = "Please fill this...";
    } else {
        span[0].innerHTML = "";
    }
}

function validateEmail() {
    var pattern = /([a-z | 0-9])\w+[@]\w+[.]\w{2,3}/;
    var str = email.value;
    // console.log(pattern.test(str));
    if (pattern.test(str)) {
        span[1].innerHTML = "";
    } else {
        span[1].innerHTML = "InValid";
    }
}

function uploadImage() {
    // console.log(file.files[0].name);
    document.querySelector("#dp").src = "../../images/" + file.files[0].name;
}