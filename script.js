"use strict";

const getRandomNumber = () => Math.trunc(Math.random() * 20) + 1;
const randomNumber = getRandomNumber();
let highScore = 0;

let userScore = 20;
const setMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".guess").value);
  // Değer girilmemiş
  if (!tahmin) {
    setMessage("Sayı YOK");
    // Oyuncu kazanır
  } else if (tahmin === randomNumber) {
    setMessage("Doğru Sayı...");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < userScore) {
      highScore = userScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (tahmin !== randomNumber) {
    if (userScore > 1) {
      userScore--;
      setMessage(tahmin > randomNumber ? "Çok Yüksek" : "Çok Düşük");
      document.querySelector(".score").textContent = userScore;
    } else {
      setMessage("Oyunu Kaybettin...!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  getRandomNumber();
  userScore = 20;
  document.querySelector(".score").textContent = userScore;
  setMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
