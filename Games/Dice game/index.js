var number = Math.floor(Math.random()*6)+1;

var name1 = "images/dice" + number + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", name1);

var number2 = Math.floor(Math.random()*6)+1;
var name2 = "images/dice" + number2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", name2);


if (number > number2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(number < number2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}