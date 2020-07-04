const btns = document.querySelectorAll('buttons');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const scoreboard = {
    player: 0,
    computer: 0
}

// play game
function play(e) {
    console.log(e.target.id);
}

// even listeners
btns.forEach(btn => btn.addEventListener('click', play));







// let pScore = 0;
// let cScore = 0;

// const btns = document.querySelectorAll('button');
// btns.forEach((button) => {

//     button.addEventListener('click', (e) => {

//     // game 
//         function game() {
//             let playerSelection = reply_click();
//             let computerSelection = computerPlay();
//             return playRound(playerSelection, computerSelection);
//         }


//     // player Input
//         function reply_click(clicked_id) {
//             return clicked_id;
//         }

//     // random number generator for computer
//         function computerPlay(rock, paper, scissors) {
//             choiceSelection = [
//                 'rock',
//                 'paper',
//                 'scissors'
//             ]
//             randomSelector = Math.floor(Math.random()*choiceSelection.length);
//             computerSelected = choiceSelection[randomSelector];
//             return(computerSelected)
//             }

            
//     // check and play each round who wins
//         function playRound(e) {
//             playerSelection = reply_click;
//             computerSelection = computerPlay();

//             if (playerSelection == computerSelection) {
//             result = `it's a tie! you both picked ${playerSelection}`  
//             }

//             if (playerSelection == 'rock') {
//                 if (computerSelection == 'paper') {
//                     cScore++
//                     result = 'Player lose';
//                 } else {
//                     pScore++
//                     result = 'Player win';
//                 }
//             } 

//             if (playerSelection == 'paper') {
//                 if (computerSelection == 'scissors') {
//                     cScore++
//                     result = 'Player lose';
//                 } else {
//                     pScore++
//                     result = 'Player win';
//                 }   
//             }

//             if (playerSelection == 'scissors') {
//                 if (computerSelection == 'rock') {
//                     cScore++
//                     result = 'Player lose';
//                 } else {
//                     pScore++
//                     result = 'Player win';
//                 }
//             }
//         }
//     });
// });
