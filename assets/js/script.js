/**
 * Declare constants for DOM elements
 * and possible choices
 */
// code from the sample video on CI

const buttons = document.getElementsByClassName('buttons');
const playerOne = documemt.getElementsById('player1');
const computerOne = documemt.getElementsById('computer1');
const playerImage = documemt.getElementsById('player-image');
const computerImage = documemt.getElementsById('computer-image');
const messages = documemt.getElementsById('messages');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

/**
 * Add event listener to the buttons
 */
// code based on the Love Maths project
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerOption = this.getAttribute('data-type');
        playGame(playerOption);
    });
}

/**
 * The main game function. Accepts one parameter, which 
 * is the data-type value of the selected button
 */
function playGame(playerOption) {
    
    playerImage.src = `assets/images/${choices[playerOption]}.png`;
    playerImage.alt = choices[playerOption];
    
    let computerOption = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerOption]}.png`;
    computerImage.alt = choices[computerOption];

    let result = checkWinner(choices[computerOption], choices[playerOption]);

    updateScores(result);
}