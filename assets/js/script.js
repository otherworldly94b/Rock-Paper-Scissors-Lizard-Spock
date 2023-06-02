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
 * Add event listener to the buttons and test if they work with alerts
 */
// code based on the Love Maths project
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "rock") {
            alert(`You clicked rock`);
            // checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    });