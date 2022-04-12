const randomNumber1 = Math.floor(Math.random() * (6)) + 1;
// picks from 1-6
// console.log(randomNumber1);

const randomDiceImage = `dice` + randomNumber1 + `.png`;
// dice1.png - dice6.png
// console.log(randomDiceImage)

const randomImageSource = `images/` + randomDiceImage;
// images/dice1.png - 6

// locate all elements with img tag
const image1 = document.querySelectorAll("img")[0];