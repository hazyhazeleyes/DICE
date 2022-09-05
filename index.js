var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🎲 Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎲";
}
else {
    document.querySelector("h1").innerHTML = "🎲DRAW!🎲";
}