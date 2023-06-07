/**
 * Declare constants for DOM elements
 */
// inspired code from the sample video on CI

const playerOne = document.getElementById('player1');
const computerOne = document.getElementById('computer1');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const messages = document.getElementById('messages');
const restartBtn  = document.getElementById('restart');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


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
 * Gets a random choice between 
 * our 5 options and returns it as
 * the computer's choice.
 */
function getComputerHand() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  random_choice =  Math.floor(Math.random() * choices.length);
  return choices[random_choice];
}

/** 
 * This compares the player and the computer's hands/choices
 * and returns a number that corresponds to:
 * Draw, Win, or Lose (0, 1, 2)
*/

function evaluateHand(player, computer) {
  if (player === computer) {
    return 0;
  }
  if (player === 'rock') {
    if (computer === 'paper' || computer === 'spock') {
      return 2;
    }
  }
  if (player === 'paper') {
    if (computer === 'scissors' || computer === 'lizard') {
      return 2;
    }
  }
  if (player === 'scissors') {
    if (computer === 'rock' || computer === 'spock') {
      return 2;
    }
  }
  if (player === 'spock') {
    if (computer === 'lizard' || computer === 'paper') {
      return 2;
    }
  }
  if (player === 'lizard') {
    if (computer === 'scissors' || computer === 'rock') {
      return 2;
    }
  }
  return 1;
}

/**
 * Shows a Restart button that allows for a reset
 * when either the player or the computer reach 10 points
 */
function check_overall_winner() {
  if (playerScore === 10 || computerScore === 10) {
    console.log('END OF GAME!!!');
    
    restartBtn.style.visibility = 'visible';
  }
}


// what I need to do is disable everything so you cant continue the game 
// give message on screen as to who won
// make the restart button visible

