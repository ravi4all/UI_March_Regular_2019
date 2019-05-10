function Song(id, name, url, img) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.img = img;
    this.selected = false;
}

var object = {
    "playList": [],
    "addSong": function(id, name, url, img) {
        var obj = new Song(id, name, url, img);
        this.playList.push(obj);
        console.log(this.playList);
    },
    "deleteSong": function(id) {
        var toDelete = this.playList.filter(function(obj) {
            return obj.id == id;
        });
        // toDelete[0].selected = true;
        toDelete[0].selected = !toDelete[0].selected;
        this.playList = this.playList.filter(function(obj) {
            return obj.selected == false;
        })
    }
}