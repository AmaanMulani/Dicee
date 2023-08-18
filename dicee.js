/*Dice 1 */
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource= "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

/*Dice 2*/
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber2+".png";
var randomImageSource= "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

/*Heading Change*/

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins !"
}
else if (randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins !"
}
else{
    document.querySelector("h1").innerHTML="Draw !"
}