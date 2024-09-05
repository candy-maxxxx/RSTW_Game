// script.js

document.addEventListener('DOMContentLoaded', () => {
    const statements = {
        bio: [
            { statement: 'The powerhouse of the cell.', term: 'mitochondria' },
            { statement: 'The process by which plants make their food.', term: 'photosynthesis' },
            { statement: 'A change in genetic composition of a population from generation to generation.', term: 'evolution' },
            { statement: 'A phenomenon that refers to a permanent alteration.', term: 'mutation' },
            { statement: 'The inner lining in embryology.', term: 'endoderm' },
            { statement: 'In phylogeny, these are the descendants of a common ancestor.', term: 'monophyletic' },
            { statement: 'A hollow, cone-shaped pump which is muscular in nature.', term: 'heart' },
            { statement: 'Gallus gallus is the scientific name of what?', term: 'chicken' },
            { statement: 'The second act of swallowing.', term: 'pharyngeal' },
            { statement: 'A type of glial cells that connects to the myelin sheaths.', term: 'oligodendrocyte' },
            { statement: 'This organ stores urine.', term: 'bladder' },
            { statement: 'Codes for particular characteristics.', term: 'allele' },
            { statement: 'Entrance to the kidney.', term: 'hilum' },
            { statement: 'In a diagram of the heart, what does the red color stand for?', term: 'aorta' },
            { statement: 'Requires energy since there is an active contraction of the muscles to reduce the pressure of gas inside the lungs.', term: 'inspiration' },
            { statement: 'The filtered blood in the excretory system.', term: 'urine' },
            { statement: 'The center of a flower.', term: 'pistil' },
            { statement: 'The tallest grass.', term: 'bamboo' },
            { statement: 'Milky fluid produced by plants.', term: 'latex' },
            { statement: 'Low to high concentration.', term: 'osmosis' }
        ],
        chem: [
            { statement: 'The basic unit of a chemical element.', term: 'atom' },
            { statement: 'A substance made up of only one type of atom.', term: 'element' },
            { statement: 'Another word for electron.', term: 'valence' },
            { statement: 'Type of solid where the atoms vibrate in more random arrangements.', term: 'amorphous' },
            { statement: 'What does OH stands for?', term: 'hydroxide' },
            { statement: 'A positive charged ion.', term: 'cation' },
            { statement: 'In the periodic table, vertical columns are also known as?', term: 'groups' },
            { statement: 'Simplest type of chemical formula.', term: 'empirical' },
            { statement: 'SnOsub2 + 2Hsub2 -> Sn + 2Hsub2O, what does the "Sn + 2Hsub2O" stand for?', term: 'products' },
            { statement: 'It is the 11th element in the periodic table.', term: 'sodium' },
            { statement: 'Study of quantitative aspects regarding chemical equations and formulas.', term: 'stoichiometry' },
            { statement: 'A+B -> AB is an example of?', term: 'synthesis' },
            { statement: 'What does the O stands for in LEORA?', term: 'oxidation' },
            { statement: 'The relationship between volume and pressure in Boyle Law is', term: 'inverse' },
            { statement: 'It is a quantum number that indicates relative size and relative distance.', term: 'principal' },
            { statement: 'Sometimes called the orbital-orientation quantum number.', term: 'magnetic' },
            { statement: 'Movement of fluid from high to low concentration.', term: 'diffusion' },
            { statement: 'Which element has the highest Ionization energy.', term: 'helium' },
            { statement: 'It is the 15th element in the periodic table.', term: 'phosphorus' },
            { statement: 'Absolute zero.', term: 'kelvin' }
        ],
        physics: [
            { statement: 'The force that attracts a body towards the center of the earth.', term: 'gravity' },
            { statement: 'The speed of light in vacuum is approximately.', term: '299792458' },
            { statement: 'Intersecting in one point of the circle.', term: 'tangent' },
            { statement: 'Closest to the Sun.', term: 'aphelion' },
            { statement: 'Unit of work.', term: 'Joules' },
            { statement: 'What is the work if F is perpendicular to D.', term: 'zero' },
            { statement: 'Path of each planet around the Sun.', term: 'ellipse' },
            { statement: 'Inertia of a moving object.', term: 'momentum' },
            { statement: 'Work done by unit time.', term: 'power' },
            { statement: 'Value of Gravitation (G).', term: '6.67 x 10^-11' },
            { statement: 'Orbital eccentricity of Earth.', term: '0.017' },
            { statement: 'Measure of the force that can cause an object to rotate about an axis.', term: 'torque' },
            { statement: 'Materials that dont allow the passage of electric current.', term: 'insulators' },
            { statement: 'What is the term for the amount of matter in an object?.', term: 'mass' },
            { statement: 'The resistance an object has to a change in its state of motion.', term: 'inertia' },
            { statement: 'Which force acts opposite to the direction of motion?', term: 'friction' },
            { statement: 'The value of KE if the PE is 0.', term: '100' },
            { statement: 'Deals with concepts that needs to describe motion.', term: 'kinematics' },
            { statement: 'A device that measures instantaneous speed.', term: 'speedometer' },
            { statement: 'What is the change in the state of motion of an object?', term: 'acceleration' }
        ]
    };
    statements.all = [...statements.bio, ...statements.chem, ...statements.physics];

    let randomizedStatements = [];
    let currentStatementIndex = 0;
    let score = 0;
    let timeLeft = 150; // Default to 2:30 mins (150 seconds)
    let timer;
    let selectedMode = '';
    let selectedTime = 150;

    const introPage = document.getElementById('intro-page');
    const startGameButton = document.getElementById('start-game');
    const modeButtons = document.querySelectorAll('.mode-button');
    const timeButtons = document.querySelectorAll('.time-button');
    const instructionsContainer = document.getElementById('instructions-container');
    const readyButton = document.getElementById('ready-button');
    const gameContainer = document.getElementById('game-container');
    const statementElement = document.getElementById('statement');
    const wordBoxesElement = document.getElementById('word-boxes');
    const keyboardElement = document.getElementById('keyboard');
    const timerElement = document.getElementById('timer');
    const scoreboardElement = document.getElementById('scoreboard');
    const skipButton = document.getElementById('skip-button');
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.getElementById('message');
    const playAgainButton = document.getElementById('play-again');
    const exitButton = document.getElementById('exit');

    // Audio elements
    const backgroundSound = new Audio('spotifydown.com - boba date.mp3');
    const correctSound = new Audio('Correct Answer sound effect.mp3'); 
    const incorrectSound = new Audio('https://incorrect-sound.mp3'); 
    const gameOverSound = new Audio('Game Over SOund Effect.mp3'); 
    backgroundSound.loop = true; 

    modeButtons.forEach(button => {
        button.addEventListener('click', () => selectMode(button));
    });

    timeButtons.forEach(button => {
        button.addEventListener('click', () => selectTime(button));
    });

    function selectMode(button) {
        modeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMode = button.id.replace('mode-', '');
        checkStartButton();
    }

    function selectTime(button) {
        timeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedTime = parseInt(button.id.split('-')[1]) * 60;
        checkStartButton();
    }

    function checkStartButton() {
        if (selectedMode && selectedTime) {
            startGameButton.disabled = false;
        }
    }

    startGameButton.addEventListener('click', showInstructions);

    function showInstructions() {
        introPage.style.display = 'none';
        instructionsContainer.style.display = 'block';
    }

    readyButton.addEventListener('click', startGame);

    function startGame() {
        instructionsContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        currentStatementIndex = 0;
        score = 0;
        timeLeft = selectedTime;
        randomizedStatements = shuffleArray(statements[selectedMode].slice());
        displayStatement();
        createKeyboard();
        startTimer();
        backgroundSound.play(); // Start playing background sound
    }

    function displayStatement() {
        const currentStatement = randomizedStatements[currentStatementIndex];
        statementElement.textContent = currentStatement.statement;
        wordBoxesElement.innerHTML = '';
        for (let i = 0; i < currentStatement.term.length; i++) {
            const box = document.createElement('div');
            box.className = 'word-box';
            box.setAttribute('data-index', i);
            wordBoxesElement.appendChild(box);
        }
        resetKeyboard();
    }

    function createKeyboard() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        keyboardElement.innerHTML = '';
        for (let letter of alphabet) {
            const key = document.createElement('div');
            key.className = 'key';
            key.textContent = letter;
            key.addEventListener('click', () => handleLetterClick(letter));
            keyboardElement.appendChild(key);
        }
    }

    function resetKeyboard() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('used');
            key.addEventListener('click', () => handleLetterClick(key.textContent));
        });
    }

    function handleLetterClick(letter) {
        const currentStatement = randomizedStatements[currentStatementIndex];
        const term = currentStatement.term;
        const letterBoxes = document.querySelectorAll('.word-box');

        let correctGuess = false;
        for (let i = 0; i < term.length; i++) {
            if (term[i] === letter) {
                letterBoxes[i].textContent = letter;
                correctGuess = true;
                score += 10;
            }
        }

        if (correctGuess) {
            correctSound.play();
        } else {
            incorrectSound.play();
            score -= 5;
        }

        const key = Array.from(keyboardElement.children).find(k => k.textContent === letter);
        key.classList.add('used');
        key.removeEventListener('click', () => handleLetterClick(letter));

        updateScore();
        checkCompletion();
    }

    function updateScore() {
        scoreboardElement.textContent = `Score: ${score}`;
    }

    function startTimer() {
        timerElement.textContent = `Time: ${formatTime(timeLeft)}`;
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time: ${formatTime(timeLeft)}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame("Time's up! Play Again?");
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function checkCompletion() {
        const letterBoxes = document.querySelectorAll('.word-box');
        let completed = true;
        letterBoxes.forEach(box => {
            if (box.textContent === '') {
                completed = false;
            }
        });
        if (completed) {
            score += 150;
            updateScore();
            showMessage('Congratulations! You found the term!', false);
        }
    }

    function showMessage(msg, showButtons) {
        messageElement.textContent = msg;
        messageContainer.style.display = 'flex';
        if (!showButtons) {
            setTimeout(() => {
                messageContainer.style.display = 'none';
                currentStatementIndex = (currentStatementIndex + 1) % randomizedStatements.length;
                displayStatement();
            }, 2000);
        }
    }

    function endGame(msg) {
        backgroundSound.pause(); // Stop the background sound
        gameOverSound.play();
        messageElement.textContent = msg;
        messageContainer.style.display = 'flex';
        playAgainButton.style.display = 'inline-block';
        exitButton.style.display = 'inline-block';
        document.querySelector('.message-buttons').style.display = 'block';
    }

    playAgainButton.addEventListener('click', () => {
        messageContainer.style.display = 'none';
        startGame();
    });

    exitButton.addEventListener('click', () => {
        messageContainer.style.display = 'none';
        gameContainer.style.display = 'none';
        introPage.style.display = 'block';
    });

    skipButton.addEventListener('click', () => {
        currentStatementIndex = (currentStatementIndex + 1) % randomizedStatements.length;
        displayStatement();
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
