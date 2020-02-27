var plaatjes = [1,2,3];
var slideholder1 = document.getElementById("slideholder1");
var teller = 0;
slideholder1.style.backgroundImage = "url('img/gezichtboven1.jpg')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('img/gezichtboven" + getGezicht() + ".jpg')";

})

function getGezicht() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;

}



var plaatjes = [1,2,3];
var slideholder2 = document.getElementById("slideholder2");
var teller = 0;
slideholder2.style.backgroundImage = "url('img/gezichtmidden1.jpg')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/gezichtmidden" + getGezicht() + ".jpg')";

})

function getGezicht() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;

}
var plaatjes = [1,2,3];
var slideholder3 = document.getElementById("slideholder3");
var teller = 0;
slideholder3.style.backgroundImage = "url('img/gezichtonder1.jpg')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/gezichtonder" + getGezicht() + ".jpg')";

})

function getGezicht() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;

}