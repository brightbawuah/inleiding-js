pics = document.getElementById("pics");
createPicsHolders();
createGorillaImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picure-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGorillaImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);
        gorillaPlaatje = document.createElement("img");
        gorillaPlaatje.src = "img/chooser" + (i + 1) + ".jpg";
        gorillaPlaatje.id = i;
        gorillaPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(gorillaPlaatje);
    }
}

function maakFavoriet(id) {
    console.log("Maak mij Favoriet! Het gaat om gorilla... " + (parseInt(id) + 1));
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none"
    }
    favoriet = document.getElementById("favoriet" + (parseInt(id) + 1));
    favoriet.style.backgroundImage = "url('img/hart.jpg')";
}
