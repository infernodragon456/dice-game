var n = Math.random();
var m = Math.random();

n = Math.floor((n*6) + 1);
m = Math.floor((m*6) + 1);

document.querySelector(".img1").setAttribute("src" , "./images/dice" + n + ".png");
document.querySelector(".img2").setAttribute("src" , "./images/dice" + m + ".png");

if (n > m){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
if (m > n){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
if (n === m){
    document.querySelector("h1").innerHTML = "Draw";
}