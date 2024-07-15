function startGame() {
  let confirmation = true;
  while (confirmation) {
    // player choice
    let playerChoice = prompt("Silahkan pilih : \n(Batu, Gunting, Kertas)");
    // computer choice
    let computerChoice = Math.random();
    //random number
    if (computerChoice < 0.33) {
      computerChoice = "Batu";
    } else if (computerChoice >= 0.33 && computerChoice < 0.66) {
      computerChoice = "Gunting";
    } else {
      computerChoice = "Kertas";
    }

    //rules
    let result = "";
    if (playerChoice == computerChoice) {
      result = "Draw!!";
    } else if (playerChoice == "Batu") {
      //   if (computerChoice == "Kertas") {
      //     result = "YOur Lose!!";
      //   } else {
      //     result = "YOur Win!!";
      //   }
      result = computerChoice == "Kertas" ? "You Lose!!" : "You Win!! Congratulation!!"; // jika true maka 'Lose' : jika false maka 'Win'
    } else if (playerChoice == "Gunting") {
      result = computerChoice == "Batu" ? "You Lose!!" : "You Win!! Congratulation!!";
    } else if (playerChoice == "Kertas") {
      result = computerChoice == "Gunting" ? "You Lose!!" : "You Win!! Congratulation!!";
    } else {
      result = "Your choice does not match the list";
    }
    alert(`You choice is : ${playerChoice} and computer choice is : ${computerChoice} \nThe result is : \n${result}`);

    confirmation = confirm("Wanna play again?");
  }
  alert("Thankyou for playing");
}
