// Get references to the buttons and result divs
const buttons = document.querySelectorAll(".block1 button");
const resultatMoi = document.querySelector(".resultatMoi");
const scoreMoi = document.querySelector(".scoreMoi");
const resultatOrdi = document.querySelector(".resultatOrdi");
const scoreOrdi = document.querySelector(".scoreOrdi");

// Function to generate a random choice for the computer (Pierre, Feuille, Ciseaux)
function computerPlay() {
  const choices = ["pierre", "feuille", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner based on player and computer choices
function playRound(playerChoice) {
    const computerChoice = computerPlay();
  
    let result = "";
    let winner = "";
  
    if (playerChoice === computerChoice) {
      result = "Égalité !";
    } else if (
      (playerChoice === "pierre" && computerChoice === "ciseaux") ||
      (playerChoice === "feuille" && computerChoice === "pierre") ||
      (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
      result = "Vous avez gagné !";
      winner = "player";
    } else {
      result = "Vous avez perdu !";
      winner = "ordi";
    }
  
    // Update results and scores
    resultatMoi.textContent = `Vous avez choisi: ${playerChoice}`;
    resultatOrdi.textContent = `L'ordinateur a choisi: ${computerChoice}`;
  
    // Update colors based on winner
    if (winner === "player") {
      document.getElementById('moi').style.backgroundColor = "#81C378";
      document.getElementById('ordi').style.backgroundColor = "#C70039";
    } else if (winner === "ordi") {
      document.getElementById('moi').style.backgroundColor = "#C70039";
      document.getElementById('ordi').style.backgroundColor = "#81C378";
    } else {
      // In case of a tie, reset background colors
      document.getElementById('moi').style.backgroundColor = "";
      document.getElementById('ordi').style.backgroundColor = "";
    }
  
    updateScore(winner);
}
// Function to update the score based on the winner
function updateScore(winner) {
  let currentScoreMoi = parseInt(scoreMoi.textContent) || 0;
  let currentScoreOrdi = parseInt(scoreOrdi.textContent) || 0;

  if (winner === "player") {
    currentScoreMoi++;
  } else if (winner === "ordi") {
    currentScoreOrdi++;
  }

  scoreMoi.textContent = currentScoreMoi + " points";
  scoreOrdi.textContent = currentScoreOrdi + " points";
}

// Add click event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playRound(playerChoice);
  });
});