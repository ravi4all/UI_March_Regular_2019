window.addEventListener("load", initEvents);
var audio;

function initEvents() {
    audio = document.querySelector("#audio");
    var ul = document.querySelector("#songsList");
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.className = 'w-100 btn btn-primary';
        btn.innerHTML = "Add to Playlist";
        span_1.innerHTML = obj.song_name;
        img.setAttribute("src", obj.song_thumb);
        span_1.setAttribute("title", obj.song_id);
        img.setAttribute("title", obj.song_id);
        li.appendChild(img);
        li.appendChild(span_1);
        li.appendChild(btn);
        ul.appendChild(li);
        span_1.addEventListener("click", playSong);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlayList);
    });

    document.querySelector("#save").addEventListener("click", savePlaylist);
    loadPlaylist();
}

function savePlaylist() {
    if (window.localStorage) {
        var json = JSON.stringify(object.playList);
        // console.log(json);
        localStorage.setItem('playList', json);
    }
}

function loadPlaylist() {
    if (window.localStorage) {
        object.playList = JSON.parse(localStorage.getItem('playList'));
        printPlayList();
    }
}

function playSong() {
    // event.srcElement
    // console.log(event.srcElement.title);
    var song_id = event.srcElement.title;
    var song_url;
    var song_thumb;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            song_url = songsList[i].song_url;
            song_thumb = songsList[i].song_thumb;
        }
    }
    audio.src = song_url;
    audio.play();
    document.querySelector("#song_thumb").src = song_thumb;
}

function addToPlayList() {
    var song_id = event.srcElement.parentElement.childNodes[1].title;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            object.addSong(songsList[i].song_id,
                songsList[i].song_name, songsList[i].song_url,
                songsList[i].song_thumb);
        }
    }
    printPlayList();
}

function printPlayList() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    object.playList.forEach(function(obj) {
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.className = 'btn btn-primary';
        btn.innerHTML = "Delete";
        span_1.innerHTML = obj.name;
        img.setAttribute("src", obj.img);
        span_1.setAttribute("title", obj.id);
        img.setAttribute("title", obj.id);
        li.appendChild(img);
        li.appendChild(span_1);
        li.appendChild(btn);
        ul.appendChild(li);
        span_1.addEventListener("click", playSong);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlayList);
    })
}

function deleteFromPlayList() {
    var song_id = event.srcElement.parentElement.childNodes[1].title;
    object.deleteSong(song_id);
    printPlayList();
}