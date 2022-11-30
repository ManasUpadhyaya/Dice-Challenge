var randomNumber1 = Math.floor(1 + (6*Math.random()));
var src1 = "images/dice"+ randomNumber1+ ".png";
document.querySelector(".img1").src = src1;
var randomNumber2 = Math.floor(1 + (6*Math.random()));
var src2 = "images/dice"+ randomNumber2+ ".png";
document.querySelector(".img2").src = src2;
if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML = "DRAW !!";
}
else if(randomNumber1>=randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!🚩";
}
