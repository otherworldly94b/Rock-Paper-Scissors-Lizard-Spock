/**
 * Declare constants for DOM elements
 */
// inspired code from the sample video on CI

const playerOne = document.getElementById('player1');
const computerOne = document.getElementById('computer1');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const messages = document.getElementById('messages');

let playerScore = 0;
let computerScore = 0;

/**
 * Plays a round of the game between the player and the computer and
 * iterates the scores based on the result and updates them on the webpage.
 * It also changes the numbers from integers to strings.
 */
function playerChoose(player_choice) {
  let computer_choice = getComputerHand();
  console.log('computer picks: ', computer_choice);
  // 0 for draw, 1 for player, 2 for computer
  let hand_result = evaluateHand(player_choice, computer_choice);
  console.log('result of game: ', hand_result);
  if (hand_result === 0) {
    playerScore ++;
    computerScore ++;
  }
  if (hand_result === 1) {
    playerScore ++;
  }
  if (hand_result === 2) {
    computerScore ++;
  }
  playerOne.innerText = playerScore.toString();
  computerOne.innerText = computerScore.toString();
  check_overall_winner();
}

/**
 * The main game function. Accepts one parameter, which 
 * is the data-type value of the selected button
 */
function playGame(playerOption) {
    
    playerImage.src = `assets/images/${choices[playerOption]}.webp`;
    playerImage.alt = choices[playerOption];
    
    let computerOption = Math.floor(Math.random() * 5) + 1;

    computerImage.src = `assets/images/${choices[computerOption]}.`;
    computerImage.alt = choices[computerOption];

    let result = checkVictor(choices[computerOption], choices[playerOption]);

    updateScores(result);
}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkVictor(){
    if(playerChoice == computerChoice){
        return "It's a Draw!";
      }
      else if(computerChoice === "rock"){
        return (playerChoice === "paper") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "paper"){
        return (playerChoice === "scissors") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "scissors"){
        return (playerChoice === "rock") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "lizard"){
        return (playerChoice === "rock") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "spock"){
        return (playerChoice === "lizard") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "scissors"){
        return (playerChoice === "spock") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "lizard"){
        return (playerChoice === "scissors") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "paper"){
        return (playerChoice === "lizard") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "spock"){
        return (playerChoice === "paper") ? "You Win!" : "You Lose!"
      }
      else if(computerChoice === "rock"){
        return (playerChoice === "spock") ? "You Win!" : "You Lose!"
      }

}

/**
 * Gets the player option and the computer option
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let option1 = document.getElementsById('player1');
    let option2 = document.getElementsById('computer1');
    let operator = document.getElementById('operator');

    if ()
}


/**
 * Gets a random choice between 
 * our 5 options and returns it as
 * the computer's choice.
 */
function getComputerHand() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  random_choice =  Math.floor(Math.random() * choices.length);
  return choices[random_choice];
}