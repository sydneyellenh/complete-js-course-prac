/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundscore, activePlayer, dice, lastDice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    //Random number
    dice = Math.floor(Math.random() * 6) + 1;

    //Display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

// console.log(activePlayer);

// if (dice += 1){
//     roundScore += dice;
//     document.querySelector('#current-' + activePlayer).textContent = roundScore;
// }else{
//     nextPlayer();
// }


if ((lastDice === dice) && (dice === 6)){
    document.getElementById('#score-' + activePlayer).textContent = 0;
    // scores[activePlayer] = 0;
    lastDice = 0;
} else if (dice === 1){
    nextPlayer();
    lastDice = 0;
} else {
    roundScore += dice;
    // lastDice = dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}

console.log(roundScore);

    // //Update the round score IF the rolled number was not 
    // if (dice > 1){

    // } else {
    //     // console.log(roundScore);
    //     nextPlayer();
        
    // } 

});

document.querySelector('.btn-hold').addEventListener('click', function(){

    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won game

    if (scores[activePlayer] > 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
    } else {
        //do nothing
    }


    //nextPlayer
    nextPlayer();

});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}








// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = dice;
