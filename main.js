const btns = document.querySelectorAll('.choices');
const playerScore = document.querySelector('#score-player');
const computerScore = document.querySelector('#score-computer');
const result = document.querySelector('#result');
const restart = document.querySelector('.restart');
const roundContainer = document.querySelector('.round');
const roundcount = document.querySelector('.round-count')
const scoreboard = {
    player: 0,
    computer: 0,
    round: 0
}
const round = document.querySelector('#round-count > span');

// play game
function play(e) {
    result.style.display = "flex";
    roundContainer.style.display = "grid";
    const choicePlayer = e.target.id;
    const choiceComputer = getComputerChoice();
    const winner = checkWinner(choicePlayer, choiceComputer);
    showWinner(winner);
}

// random number generator for computer
function getComputerChoice(rock, paper, scissors) {
    choiceSelection = [
        'rock',
        'paper',
        'scissors'
    ]
    randomSelector = Math.floor(Math.random()*choiceSelection.length);
    computerSelected = choiceSelection[randomSelector];
    return(computerSelected)
    }

// check and play each round who wins
function checkWinner(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
    return 'draw';  
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'lose';
        } else {
            return 'win';
        }
    } 

    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'lose';
        } else {
            return 'win';
        }   
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'lose';
        } else {
            return 'win';
        }
    }
}

// add the scoreboard to the Ui
function showWinner(winner) {
    if (winner === 'win') {
        scoreboard.player++;
        result.innerHTML = `
        <h2 class="text-win"> You WIN! </h2>
        `;
    } else if (winner === 'lose') {
        scoreboard.computer++;
        result.innerHTML = `
        <h2 class="text-lose"> You LOSE! </h2>
        `;
    } else {
        result.innerHTML = `
        <h2 class="text-tie"> it's a TIE </h2>
        `;
    }

    scoreboard.round++;
    roundcount.innerHTML = `
    <h2 id="round-count">ROUND ${scoreboard.round} </h2>
    `;

// show the actual score
    playerScore.innerHTML = `
    <h2>Player</h2>
    <p> ${scoreboard.player} <p>
    `;
    computerScore.innerHTML = `
    <h2>Computer</h2>
    <p> ${scoreboard.computer} <p>
    `;
    if (scoreboard.round >= 5) {
        restart.style.display = "inline-block";
    }
}

//restart game
function restartGame() {
    restart.style.display = "none";
    scoreboard.player = 0
    scoreboard.computer = 0
    scoreboard.round = 0
    playerScore.innerHTML = `
    <h2>Player</h2>
    <p> ${scoreboard.player} <p>
    `;
    computerScore.innerHTML = `
    <h2>Computer</h2>
    <p> ${scoreboard.computer} <p>
    `;
    roundcount.innerHTML = `
    <h2 id="round-count">ROUND ${scoreboard.round} </h2>
    `;

    
}
 
     // event listeners
btns.forEach(btn => btn.addEventListener('click', play));
restart.addEventListener('click', restartGame)







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
