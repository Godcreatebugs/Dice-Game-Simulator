
// random dice selector for 1st dice

var randomNumber1 = (Math.floor(Math.random()*6)) + 1;

var imgPath = "images/dice"+ randomNumber1+".png";
var attributeSelector = document.querySelector(".img1");

attributeSelector.setAttribute("src",imgPath);

// random dice selector for 2nd dice

var randomNumber2 = (Math.floor(Math.random()*6)) + 1;

var imgPath2 = "images/dice"+ randomNumber2+".png";
var attributeSelector2 = document.querySelector(".img2");

attributeSelector2.setAttribute("src",imgPath2);


//change title with the winning candidate 
var header = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    header.textContent="Player 1 wins!";
}
else if(randomNumber1<randomNumber2) {
    header.textContent="player 2 wins!";
}
else{
    header.textContent="Ohh! It's a tie! Refresh once more.";
}
