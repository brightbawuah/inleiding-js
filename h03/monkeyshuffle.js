var plaatjes = document.getElementsByTagName("img");
var random = 0;

var randNumbers = [];

while (randNumbers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randNumbers.lastIndexOf(random) == -1) {
        randNumbers.push(random);
        console.log(randNumbers);
    }
}

random = 0;
    for (var plaatje in plaatjes) {
        plaatjes[plaatje].src = "img/gorilla" + randNumbers[random] + ".jfif";
        random++;
}

/*/for (var i = 0; i <plaatjes.length; i++) {
    random = Math.floor(Math.random() * 9) + 1;
    plaatjes[i].src = "img/gorilla" + random + ".jfif";
}
*/