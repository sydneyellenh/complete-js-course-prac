/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundscore, activePlayer, dice, lastDice, customSetScore;

init();


document.querySelector('.btn-hold').style.display = 'none';
document.querySelector('.btn-roll').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    //Random number
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    //Display result
    
    document.getElementById('dice-1').style.display = "block";
    document.getElementById('dice-2').style.display = "block";

    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


// console.log(activePlayer);

if (dice1 !== 1 && dice2 !== 1){
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
    nextPlayer();
}

});


document.querySelector('.btn-hold').addEventListener('click', function(){

    //add current score to global score
    console.log(activePlayer);
    scores[activePlayer] += roundScore;

    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won game

    if (scores[activePlayer] >= customSetScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
    } 

    //nextPlayer
    nextPlayer();

});

function nextPlayer(){
    if (activePlayer === 0) { activePlayer = 1; } else { activePlayer = 0; }

    lastDice = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.getElementById('set-score-num').style.display = 'block';
    document.getElementById('set-score-num').value = '';
    document.getElementById('set-score-submit').style.display = 'block';



}

document.getElementById('set-score-submit').addEventListener('click', function(e){
    e.preventDefault();
    let inputNum = document.getElementById('set-score-num').value;
    console.log("InputNum: " + inputNum);
    customSetScore = inputNum;
    console.log("customSetScore: " + customSetScore);

    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';

    document.getElementById('set-score-num').style.display = 'none';
    document.getElementById('set-score-submit').style.display = 'none';

 });

