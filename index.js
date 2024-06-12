// script.js

document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const diceA = Math.floor(Math.random() * 6) + 1;
    const diceB = Math.floor(Math.random() * 6) + 1;
    const diceC = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice A').textContent = diceA;
    document.getElementById('dice B').textContent = diceB;
    document.getElementById('dice C').textContent = diceC;

    const scores = [{ id: 'dice A', value: diceA }, { id: 'dice B', value: diceB }, { id: 'dice C', value: diceC }];
    scores.sort((a, b) => b.value - a.value);

    const winnerText = getWinnerText(scores);
    document.getElementById('winner').textContent = winnerText;

    resetColors();
    setColors(scores);
}

function getWinnerText(scores) {
    if (scores[0].value === scores[1].value && scores[1].value === scores[2].value) {
        return "It's a draw!";
    } else if (scores[0].value === scores[1].value) {
        return `${scores[0].id.toUpperCase()} and ${scores[1].id.toUpperCase()} are tied for the win!`;
    } else {
        return `${scores[0].id.toUpperCase()} wins!`;
    }
}

function resetColors() {
    document.getElementById('dice A').style.backgroundColor = 'white';
    document.getElementById('dice B').style.backgroundColor = 'white';
    document.getElementById('dice C').style.backgroundColor = 'white';
}

function setColors(scores) {
    if (scores[0].value === scores[1].value && scores[1].value === scores[2].value) {
        scores.forEach(score => document.getElementById(score.id).style.backgroundColor = 'blue');
    } else if (scores[0].value === scores[1].value) {
        document.getElementById(scores[0].id).style.backgroundColor = 'blue';
        document.getElementById(scores[1].id).style.backgroundColor = 'blue';
        document.getElementById(scores[2].id).style.backgroundColor = 'red';
    } else {
        document.getElementById(scores[0].id).style.backgroundColor = 'green';
        document.getElementById(scores[1].id).style.backgroundColor = 'grey';
        document.getElementById(scores[2].id).style.backgroundColor = 'red';
    }
}
