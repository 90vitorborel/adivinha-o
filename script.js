let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts=0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = Number (document.getElementById("guessInput").value);
    attempts++;

    let resultMessage = '';
    if (userGuess === randomNumber) {
        resultMessage = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas`;
        document.getElementById('guessButton').disabled = true; 
    } else if (userGuess < randomNumber) {
        resultMessage = 'Seu palpite é muito baixo. Tente novamente ';
    } else { 
        resultMessage = 'Seu palpite é muito alto. Tente novamentel';
    }

    document.getElementById('resultMessage').textContent = resultMessage;
    document.getElementById('attemptsMessage').textContent = `Tentativas: ${attempts}`;
});

document.getElementById('resetButton').addEventListener('click', function() {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultMessage').textContent ='';
    document.getElementById('attemptsMessage').textContent=''; 
    document.getElementById('guessInput').value = '';
    document.getElementById('guessButton').disabled = false;

});
