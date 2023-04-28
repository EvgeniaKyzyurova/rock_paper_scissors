const endGame = (winner) => {
 
    const result = document.querySelector('.result');
    const resetBtn = document.querySelector('.reset');

    if(winner === 'User'){
        result.classList.add('winner');
        result.textContent = 'You Won The Game'
    }else if(winner === 'Computer'){
        result.classList.add('looser');
        result.textContent = 'You Lost The Game';
    }
    
    resetBtn.addEventListener('click',(e) => {
        e.preventDefault();
        window.location.reload();
    })
}
export default endGame;