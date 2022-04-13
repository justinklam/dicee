const randomNumber1 = Math.floor(Math.random() * (6)) + 1;
// picks from 1-6
// console.log(randomNumber1);

const randomDiceImage = `dice` + randomNumber1 + `.png`;
// dice1.png - dice6.png
// console.log(randomDiceImage)

const randomImageSource = `images/` + randomDiceImage;
// images/dice1.png - 6

// locate all elements with img tag
// set the src value on the attribute with randomImageSource
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * (6)) + 1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// change for index 1
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}