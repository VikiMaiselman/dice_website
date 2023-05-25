function rollTheDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let imageName = "./images/dice";
  document
    .querySelector("img#first")
    .setAttribute("src", `${imageName}${randomNumber1}.png`);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector("img#second")
    .setAttribute("src", `${imageName}${randomNumber2}.png`);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "🚩DRAW!🚩";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
  } else {
    document.querySelector("h1").innerText = "🚩Player 2 WIns!";
  }
}

document.querySelector("#check-button").addEventListener("click", function () {
  rollTheDice();
});
