// function getRandomNumber1 (randomNumber1) {
//   randomNumber1 = Math.random();
//   randomNumber1 = randomNumber1 * 6;
//   randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png

var image1 = document.querySelectorAll("img")[0]; // selecting the first img element

image1.setAttribute("src", randomImageSource); // setting first dice image to match the random number generation


// doing the second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]; // selecting the second img element

image2.setAttribute("src", randomImageSource2); // setting second dice image to match the random number generation


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
