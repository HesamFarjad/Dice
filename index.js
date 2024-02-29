function randomNumberOne() {
  var randomNumber1 = Math.random();
  var randomNumber1 = randomNumber1 * 6;
  var randomNumber1 = Math.floor(randomNumber1) + 1;
  return randomNumber1;
}
function randomNumberTwo() {
  var randomNumber2 = Math.random();
  var randomNumber2 = randomNumber2 * 6;
  var randomNumber2 = Math.floor(randomNumber2) + 1;
  return randomNumber2;
}
var result1 = randomNumberOne();
var result2 = randomNumberTwo();
//---------- dice1 ----------
if (result1 === 1) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice1.png");
} else if (result1 === 2) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice2.png");
} else if (result1 === 3) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice3.png");
} else if (result1 === 4) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice4.png");
} else if (result1 === 5) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice5.png");
} else if (result1 === 6) {
  document
    .querySelector("div.dice img.img1")
    .setAttribute("src", "./images/dice6.png");
}

//---------- dice2 ----------

if (result2 === 1) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice1.png");
} else if (result2 === 2) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice2.png");
} else if (result2 === 3) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice3.png");
} else if (result2 === 4) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice4.png");
} else if (result2 === 5) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice5.png");
} else if (result2 === 6) {
  document
    .querySelector("div.dice img.img2")
    .setAttribute("src", "./images/dice6.png");
}

// -------- h1 manipulation -------
if (result1 === result2) {
  document.querySelector("h1").textContent = "Draw";
} else if (result1 > result2) {
  document.querySelector("h1").textContent = "Player1 Win";
} else if (result1 < result2) {
  document.querySelector("h1").textContent = "Player2 Win";
} else {
  document.querySelector("h1").textContent = "Refresh Me";
}
