let containerImage = document.getElementById("image");
let resultText = document.getElementById("result");
let buttonStartGame = document.getElementById("buttonStart");
let buttonRestartGame = document.getElementById("buttonRestart");
let titleGame = document.getElementById("title");

let confirmationDialog = document.getElementById("confirmation");
let yesChoice = document.getElementById("yesButton");
let noChoice = document.getElementById("noButton");

let containerAll = document.getElementById("containerAll");

const images = document.querySelectorAll(".containerImage img");

function startGame() {
  containerImage.style.display = "flex";
  buttonStartGame.style.display = "none";

  titleGame.textContent = "Game Start!";
  titleGame.style.textAlign = "center";
  titleGame.style.marginTop = "90px";
  titleGame.style.fontSize = "2rem";

  // ketika gambar diklik
  images.forEach((img) => {
    img.onclick = function () {
      const playerChoice = this.getAttribute("data-choice").toLocaleLowerCase();
      const enemyChoice = computerChoice().toLocaleLowerCase();
      const resultOfGame = result(playerChoice, enemyChoice);

      // hasil muncul
      resultText.innerHTML = `Your choice: ${playerChoice} <br> Computer Choice: ${enemyChoice} <br> Result: ${resultOfGame}`;

      // tombol restart muncul
      buttonRestartGame.style.display = "flex";
      containerAll.style.marginTop = "-3rem";

      // menonaktifkan event onclick agar gambar tidak bosa diklik
      images.forEach((img) => (img.style.pointerEvents = "none"));
    };
  });
}

function computerChoice() {
  const choices = ["batu", "gunting", "kertas"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function result(player, computer) {
  if (player === computer) return "Draw!";

  if (
    (player === "batu" && computer === "gunting") ||
    (player === "gunting" && computer === "kertas") ||
    (player === "kertas" && computer === "batu")
  ) {
    return "You win, congratulation!!";
  } else {
    return "You lose, nice try!!";
  }
}

function restartGame() {
  confirmationDialog.showModal();
}

yesChoice.onclick = function () {
  confirmationDialog.close();

  // hasil dan tombol restart hilang
  resultText.innerHTML = "";
  buttonRestartGame.style.display = "none";

  // fungsikan gambar kembali
  images.forEach((img) => (img.style.pointerEvents = "auto"));
};

noChoice.onclick = function () {
  confirmationDialog.close();

  // hasil dan tombol restart hilang
  resultText.innerHTML = "";
  buttonRestartGame.style.display = "none";

  // hilangkan gambar
  images.forEach((img) => (img.style.display = "none"));

  // ubah title
  titleGame.textContent = "THANKS FOR PLAYING!";
  titleGame.style.marginTop = "20rem";
};
