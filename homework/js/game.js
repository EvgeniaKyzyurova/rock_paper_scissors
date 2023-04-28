let playerScore = 0;
let computerScore = 0;
const game = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.user-score');
    const computerScoreBoard = document.querySelector('.computer-score');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }else if(player === 'rock'){
        if(computer === 'paper'){
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Computer Won`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Player Won`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }else if(player === 'scissors'){
        if(computer === 'rock'){
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Computer Won`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Player Won`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }else if(player === 'paper'){
        if(computer === 'scissors'){
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Computer Won`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = `${player.toUpperCase()} VS ${computer.toUpperCase()}, Player Won`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}
export default game;