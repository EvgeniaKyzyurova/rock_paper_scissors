import '../scss/style.scss';
import game from '../js/game.js';
import endGame from '../js/endGame.js';
function start(){
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];
    const computerOptions = ['rock','paper','scissors'];
    playerOptions.forEach(option => {
        option.addEventListener('click',() => {
            const choiceNumber = Math.floor(Math.random()*computerOptions.length);
            const computerChoice = computerOptions[choiceNumber];
            game(option.textContent,computerChoice);
            const playerScore = document.querySelector('.user-score').textContent;
            const computerScore = document.querySelector('.computer-score').textContent;
            if(playerScore === '3'){
                endGame('User');
            }else if(computerScore === '3'){
                endGame('Computer');
            }
        })
    })
}
start();