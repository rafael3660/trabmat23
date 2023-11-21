const words = ['javascript', 'html', 'css', 'developer', 'programming'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = Array(selectedWord.length).fill('_');
let remainingAttempts = 6;

function displayWord() {
    document.getElementById('word-display').innerText = displayedWord.join(' ');
}

function updateAttempts() {
    document.getElementById('attempts').innerText = remainingAttempts;
}

function guessLetter() {
    const inputElement = document.getElementById('letter-input');
    const guessedLetter = inputElement.value.toLowerCase();

    if (guessedLetter.length === 1 && /^[a-z]$/.test(guessedLetter)) {
        if (selectedWord.includes(guessedLetter)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guessedLetter) {
                    displayedWord[i] = guessedLetter;
                }
            }
        } else {
            remainingAttempts--;
        }

        displayWord();
        updateAttempts();

        if (displayedWord.join('') === selectedWord) {
            alert('Parabéns! Você acertou a palavra.');
        } else if (remainingAttempts === 0) {
            alert('Game over! A palavra era: ' + selectedWord);
        }

        inputElement.value = '';
    } else {
        alert('Por favor, insira uma única letra válida.');
    }
}

displayWord();
updateAttempts();
          
