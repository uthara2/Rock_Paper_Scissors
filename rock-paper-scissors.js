let score = JSON.parse(localStorage.getItem('score'))||{
    wins : 0,
    losses : 0,
    ties : 0
}

updatedScoreElement();
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose!';
        }
        else if (computerMove === 'scissors'){
            result = 'You Win!';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win!';
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
        }
        else if (computerMove === 'scissors'){
            result = 'You lose!';
        }
    }
    else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Lose!';
        }
        else if (computerMove === 'paper') {
            result = 'You Win!';
        }
        else if (computerMove === 'scissors'){
            result = 'Tie';
        }
    }

    document.querySelector('.js-result').innerHTML= result;

    document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.png" class="icon"><img src="${computerMove}-emoji.png" class="icon">Computer`;

    if(result === 'You Win!'){
        score.wins += 1;
        }
    else if(result === 'You Lose!'){
        score.losses += 1;
    }
    else if(result === 'Tie'){
        score.ties += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updatedScoreElement();   
}

function pickComputerMove(){
    const random = Math.random();
    if(random < 1/3){
        computerMove = ('rock');
    }
    else if(random > 1/3 && random < 2/3 ){
        computerMove = ('paper');
    }
    else{
        computerMove = ('scissors');
    }
    return computerMove
}

function updatedScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}