// script.js

document.addEventListener('DOMContentLoaded', () => {
    // -------------------- Data Definitions --------------------
    const statements = {
        elementary: {
            bio: [
                { 
                    statement: 'The powerhouse of the cell.', 
                    term: 'mitochondria',
                    image: 'Images/Bio/Bio1.png' // Updated image path
                },
                { 
                    statement: 'The process by which plants make their food.', 
                    term: 'photosynthesis',
                    image: 'Images/Bio/Bio2.png' // Updated image path
                },
                { 
                    statement: 'A hollow, cone-shaped pump which is muscular in nature.', 
                    term: 'heart',
                    image: 'Images/Bio/Bio7.png' // Updated image path
                },
                { 
                    statement: 'The study of naming and classifying organisms.', 
                    term: 'taxonomy',
                    image: 'Images/Bio/elementary/taxonomy.png'
                },
                { 
                    statement: 'This organ stores urine.', 
                    term: 'bladder',
                    image: 'Images/Bio/Bio11.png' // Updated image path
                }
            ],
            chem: [
                { 
                    statement: 'The basic unit of a chemical element.', 
                    term: 'atom',
                    image: 'Images/Chem/Chem1.png' // Updated image path
                },
                { 
                    statement: 'A substance made up of only one type of atom.', 
                    term: 'element',
                    image: 'Images/Chem/Chem2.png' // Updated image path
                },
                { 
                    statement: 'Another word for electron.', 
                    term: 'valence',
                    image: 'Images/Chem/Chem3.png' // Updated image path
                },
                { 
                    statement: 'What does OH stand for?', 
                    term: 'hydroxide',
                    image: 'Images/Chem/Chem5.png' // Updated image path
                },
                { 
                    statement: 'A positive charged ion.', 
                    term: 'cation',
                    image: 'Images/Chem/Chem6.png' // Updated image path
                }
            ],
            physics: [
                { 
                    statement: 'The force that attracts a body towards the center of the earth.', 
                    term: 'gravity',
                    image: 'Images/Physics/Physics1.jpg' // Updated image path
                },
                { 
                    statement: 'The speed of light in vacuum is approximately.', 
                    term: '299792458',
                    image: 'Images/Physics/Physics2.jpg' // Updated image path
                },
                { 
                    statement: 'Unit of work.', 
                    term: 'joules',
                    image: 'Images/Physics/Physics5.png' // Updated image path
                },
                { 
                    statement: 'Materials that don’t allow the passage of electric current.', 
                    term: 'insulators',
                    image: 'Images/Physics/Physics13.jpg' // Updated image path
                },
                { 
                    statement: 'What is the term for the amount of matter in an object?', 
                    term: 'mass',
                    image: 'Images/Physics/Physics14.jpg' // Updated image path
                }
            ]
        },
        highschool: {
            bio: [
                { 
                    statement: 'A change in genetic composition of a population from generation to generation.', 
                    term: 'evolution',
                    image: 'Images/Bio/Bio3.png' // Updated image path
                },
                { 
                    statement: 'A phenomenon that refers to a permanent alteration.', 
                    term: 'mutation',
                    image: 'Images/Bio/Bio4.png' // Updated image path
                },
                { 
                    statement: 'Gallus gallus is the scientific name of what?', 
                    term: 'chicken',
                    image: 'Images/Bio/Bio8.png' // Updated image path
                },
                { 
                    statement: 'The inner lining in embryology.', 
                    term: 'endoderm',
                    image: 'Images/Bio/Bio5.png' // Updated image path
                },
                { 
                    statement: 'The second act of swallowing.', 
                    term: 'pharyngeal',
                    image: 'Images/Bio/Bio9.png' // Updated image path
                },
                { 
                    statement: 'The filtered blood in the excretory system.', 
                    term: 'urine',
                    image: 'Images/Bio/Bio16.png' // Updated image path
                }
            ],
            chem: [
                { 
                    statement: 'Simplest type of chemical formula.', 
                    term: 'empirical',
                    image: 'Images/Chem/Chem8.png' // Updated image path
                },
                { 
                    statement: 'SnO2 + 2H2 -> Sn + 2H2O, what does "Sn + 2H2O" stand for?', 
                    term: 'products',
                    image: 'Images/Chem/Chem9.png' // Updated image path
                },
                { 
                    statement: 'It is the 11th element in the periodic table.', 
                    term: 'sodium',
                    image: 'Images/Chem/Chem10.png' // Updated image path
                },
                { 
                    statement: 'A+B -> AB is an example of?', 
                    term: 'synthesis',
                    image: 'Images/Chem/Chem12.png' // Updated image path
                },
                { 
                    statement: 'The relationship between volume and pressure in Boyle’s Law is?', 
                    term: 'inverse',
                    image: 'Images/Chem/Chem17.png' // Updated image path
                }
            ],
            physics: [
                { 
                    statement: 'Path of each planet around the Sun.', 
                    term: 'ellipse',
                    image: 'Images/Physics/Physics7.jpg' // Updated image path
                },
                { 
                    statement: 'Inertia of a moving object.', 
                    term: 'momentum',
                    image: 'Images/Physics/Physics8.jpg' // Updated image path
                },
                { 
                    statement: 'Measure of the force that can cause an object to rotate about an axis.', 
                    term: 'torque',
                    image: 'Images/Physics/Physics12.jpg' // Updated image path
                },
                { 
                    statement: 'The resistance an object has to a change in its state of motion.', 
                    term: 'inertia',
                    image: 'Images/Physics/Physics15.jpg' // Updated image path
                },
                { 
                    statement: 'Which force acts opposite to the direction of motion?', 
                    term: 'friction',
                    image: 'Images/Physics/Physics16.png' // Updated image path
                }
            ]
        },
        college: {
            bio: [
                { 
                    statement: 'In phylogeny, these are the descendants of a common ancestor.', 
                    term: 'monophyletic',
                    image: 'Images/Bio/Bio6.png' // Updated image path
                },
                { 
                    statement: 'A type of glial cells that connects to the myelin sheaths.', 
                    term: 'oligodendrocyte',
                    image: 'Images/Bio/Bio10.png' // Updated image path
                },
                { 
                    statement: 'Entrance to the kidney.', 
                    term: 'hilum',
                    image: 'Images/Bio/Bio13.png' // Updated image path
                },
                { 
                    statement: 'In a diagram of the heart, what does the red color stand for?', 
                    term: 'aorta',
                    image: 'Images/Bio/Bio14.png' // Updated image path
                },
                { 
                    statement: 'Requires energy since there is an active contraction of the muscles to reduce the pressure of gas inside the lungs.', 
                    term: 'inspiration',
                    image: 'Images/Bio/Bio15.png' // Updated image path
                }
            ],
            chem: [
                { 
                    statement: 'It is a quantum number that indicates relative size and relative distance.', 
                    term: 'principal',
                    image: 'Images/Chem/Chem15.png' // Updated image path
                },
                { 
                    statement: 'Sometimes called the orbital-orientation quantum number.', 
                    term: 'magnetic',
                    image: 'Images/Chem/Chem16.png' // Updated image path
                },
                { 
                    statement: 'Movement of fluid from high to low concentration.', 
                    term: 'diffusion',
                    image: 'Images/Chem/Chem17.png' // Updated image path
                },
                { 
                    statement: 'Which element has the highest ionization energy?', 
                    term: 'helium',
                    image: 'Images/Chem/Chem18.png' // Updated image path
                },
                { 
                    statement: 'It is the 15th element in the periodic table.', 
                    term: 'phosphorus',
                    image: 'Images/Chem/Chem19.png' // Updated image path
                }
            ],
            physics: [
                { 
                    statement: 'What is the work if F is perpendicular to D?', 
                    term: 'zero',
                    image: 'Images/Physics/Physics6.png' // Updated image path
                },
                { 
                    statement: 'The value of Gravitation (G).', 
                    term: '6.67 x 10^-11',
                    image: 'Images/Physics/Physics10.png' // Updated image path
                },
                { 
                    statement: 'What is the relationship between Kinetic Energy and Mass?', 
                    term: 'direct',
                    image: 'Images/Physics/Physics11.png' // Updated image path
                },
                { 
                    statement: 'What is the unit of energy?', 
                    term: 'joules',
                    image: 'Images/Physics/Physics3.png' // Updated image path
                },
                { 
                    statement: 'The unit of current.', 
                    term: 'amperes',
                    image: 'Images/Physics/Physics4.png' // Updated image path
                }
            ]
        }
    };

    // Combine all statements for the 'Random' mode
    statements.all = [
        ...statements.elementary.bio,
        ...statements.elementary.chem,
        ...statements.elementary.physics,
        ...statements.highschool.bio,
        ...statements.highschool.chem,
        ...statements.highschool.physics,
        ...statements.college.bio,
        ...statements.college.chem,
        ...statements.college.physics
    ];

    // -------------------- Game State Variables --------------------
    let randomizedStatements = [];
    let currentStatementIndex = 0;
    let score = 0;
    let timeLeft = 150; // Default to 2:30 mins (150 seconds)
    let timer;
    let selectedSchoolLevel = '';
    let selectedMode = '';
    let selectedTime = 150;
    let isGameActive = false;

    // Constants for guesses and skips
    const MAX_SKIPS = 2;
    const MAX_GUESSES = 5;
    let remainingSkips = MAX_SKIPS;
    let remainingGuesses = MAX_GUESSES;

    // -------------------- DOM Elements --------------------
    const introPage = document.getElementById('intro-page');
    const startGameButton = document.getElementById('start-game');
    const schoolLevelButtons = document.querySelectorAll('.level-button');
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
    const guessesElement = document.getElementById('guesses');
    const skipsElement = document.getElementById('skips');

    // -------------------- Audio Elements --------------------
    const backgroundSound = new Audio('spotifydown.com - boba date.mp3');
    const correctSound = new Audio('Correct Answer sound effect.mp3'); 
    const incorrectSound = new Audio('https://incorrect-sound.mp3'); 
    const gameOverSound = new Audio('Game Over Sound Effect.mp3'); 
    backgroundSound.loop = true; 

    // -------------------- Event Listeners --------------------
    // School Level selection
    schoolLevelButtons.forEach(button => {
        button.addEventListener('click', () => selectSchoolLevel(button));
    });

    // Mode selection
    modeButtons.forEach(button => {
        button.addEventListener('click', () => selectMode(button));
    });

    // Time selection
    timeButtons.forEach(button => {
        button.addEventListener('click', () => selectTime(button));
    });

    // Start game button
    startGameButton.addEventListener('click', showInstructions);

    // Ready button to start the game
    readyButton.addEventListener('click', startGame);

    // Play again and exit buttons in the message container
    playAgainButton.addEventListener('click', () => {
        messageContainer.style.display = 'none';
        startGame();
    });

    exitButton.addEventListener('click', () => {
        messageContainer.style.display = 'none';
        gameContainer.style.display = 'none';
        introPage.style.display = 'block';
    });

    // Skip button
    skipButton.addEventListener('click', handleSkip);

    // Remove the undefined handleKeyClick listener
    // keyboardElement.addEventListener('click', handleKeyClick); // Removed to fix the issue

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress);

    // -------------------- Function Definitions --------------------

    // Select School Level
    function selectSchoolLevel(button) {
        schoolLevelButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedSchoolLevel = button.id.replace('level-', '');
        checkStartButton();
    }

    // Select game mode
    function selectMode(button) {
        modeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMode = button.id.replace('mode-', '');
        checkStartButton();
    }

    // Select time limit
    function selectTime(button) {
        timeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        const timeParts = button.id.split('-')[1].split('_');
        selectedTime = parseInt(timeParts[0]) * 60 + (timeParts[1] ? parseInt(timeParts[1]) : 0);
        checkStartButton();
    }

    // Enable the start button if school level, mode, and time are selected
    function checkStartButton() {
        if (selectedSchoolLevel && selectedMode && selectedTime) {
            startGameButton.disabled = false;
        }
    }

    // Show instructions screen
    function showInstructions() {
        introPage.style.display = 'none';
        instructionsContainer.style.display = 'block';
    }

    // Start the game
    function startGame() {
        isGameActive = true;
        instructionsContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        resetGameState();
        randomizedStatements = shuffleArray(getSelectedStatements());
        displayStatement();
        createKeyboard();
        startTimer();
        updateGuesses();
        updateSkips();
        backgroundSound.play();
    }

    // Reset game state variables
    function resetGameState() {
        currentStatementIndex = 0;
        score = 0;
        timeLeft = selectedTime;
        remainingGuesses = MAX_GUESSES;
        remainingSkips = MAX_SKIPS;
        updateScore();
        updateGuesses();
        updateSkips();
        skipButton.disabled = false;
    }

    // Get statements based on selected school level and mode
    function getSelectedStatements() {
        if (selectedMode === 'all') {
            // Combine all modes within the selected school level
            return [
                ...statements[selectedSchoolLevel].bio,
                ...statements[selectedSchoolLevel].chem,
                ...statements[selectedSchoolLevel].physics
            ];
        } else {
            // Return statements for the selected mode within the selected school level
            return statements[selectedSchoolLevel][selectedMode];
        }
    }

    // Display the current statement and related image
    function displayStatement() {
        if (currentStatementIndex >= randomizedStatements.length) {
            endGame("You've completed all statements! Play Again?");
            return;
        }

        const currentStatement = randomizedStatements[currentStatementIndex];
        statementElement.textContent = currentStatement.statement;

        // Handle image display if image property exists
        const imageElement = document.getElementById('statement-image');
		if (currentStatement.image) {
			imageElement.src = currentStatement.image;
			imageElement.style.display = 'block';
		} else {
			imageElement.style.display = 'none';
		}

        // Create word boxes based on the term length
        wordBoxesElement.innerHTML = '';
        for (let i = 0; i < currentStatement.term.length; i++) {
            const box = document.createElement('div');
            box.className = 'word-box';
            box.setAttribute('data-index', i);
            box.textContent = '\u00A0'; // Non-breaking space to occupy space
            wordBoxesElement.appendChild(box);
        }

        resetKeyboard();
    }

    // Create the on-screen keyboard
    function createKeyboard() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        keyboardElement.innerHTML = '';
        for (let letter of alphabet) {
            const key = document.createElement('div');
            key.className = 'key';
            key.textContent = letter;
            key.addEventListener('click', () => handleLetterClick(letter));
            keyboardElement.appendChild(key);
        }
    }

    // Reset the keyboard to initial state
    function resetKeyboard() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('used');
            key.disabled = false;
            key.addEventListener('click', () => handleLetterClick(key.textContent));
        });
    }

    // Handle letter clicks from on-screen keyboard
    function handleLetterClick(letter) {
        processGuess(letter);
    }

    // Handle physical keyboard input
    function handleKeyPress(event) {
        if (!isGameActive) return;
        const letter = event.key.toLowerCase();
        const validKeys = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        if (validKeys.includes(letter)) {
            processGuess(letter);
        }
    }

    // Process a guessed letter
    function processGuess(letter) {
        const currentStatement = randomizedStatements[currentStatementIndex];
        const term = currentStatement.term.toLowerCase();
        const letterBoxes = document.querySelectorAll('.word-box');

        let correctGuess = false;
        for (let i = 0; i < term.length; i++) {
            if (term[i] === letter) {
                if (letterBoxes[i].textContent === '\u00A0') { // Only update if not already guessed
                    letterBoxes[i].textContent = letter;
                    correctGuess = true;
                    score += 10;
                }
            }
        }

        if (correctGuess) {
            correctSound.play();
        } else {
            incorrectSound.play();
            score -= 5;
            remainingGuesses--;
            updateGuesses();
            if (remainingGuesses <= 0) {
                endGame("No more guesses left! Play Again?");
                return;
            }
        }

        // Disable the guessed key on the keyboard
        const key = Array.from(keyboardElement.children).find(k => k.textContent === letter);
        if (key) {
            key.classList.add('used');
            key.disabled = true;
        }

        updateScore();
        checkCompletion();
    }

    // Update the score display
    function updateScore() {
        scoreboardElement.textContent = `Score: ${score}`;
    }

    // Update the guesses left display
    function updateGuesses() {
        guessesElement.textContent = `Guesses left: ${remainingGuesses}`;
    }

    // Update the skips left display
    function updateSkips() {
        skipsElement.textContent = `Skips left: ${remainingSkips}`;
    }

    // Start the game timer
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

    // Format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Check if the current term is fully guessed
    function checkCompletion() {
        const letterBoxes = document.querySelectorAll('.word-box');
        let completed = true;
        letterBoxes.forEach(box => {
            if (box.textContent === '\u00A0') {
                completed = false;
            }
        });

        if (completed) {
            score += 150;
            updateScore();
            showMessage('Congratulations! You found the term!', false);
            advanceToNextStatement();
        }
    }

    // Show a message to the player
    function showMessage(msg, showButtons) {
        messageElement.textContent = msg;
        messageContainer.style.display = 'flex';
        document.querySelector('.message-buttons').style.display = showButtons ? 'block' : 'none';

        // Automatically hide the message after 2 seconds if buttons are not to be shown
        if (!showButtons) {
            setTimeout(() => {
                messageContainer.style.display = 'none';
                advanceToNextStatement();
            }, 2000);
        }
    }

    // Advance to the next statement
    function advanceToNextStatement() {
        currentStatementIndex++;
        if (currentStatementIndex < randomizedStatements.length) {
            displayStatement();
        } else {
            endGame("You've completed all statements! Play Again?");
        }
    }

    // Handle skipping the current statement
    function handleSkip() {
        if (remainingSkips > 0) {
            score -= 10; // Penalty for skipping
            remainingSkips--;
            updateScore();
            updateSkips();
            currentStatementIndex++;
            displayStatement();

            if (remainingSkips === 0) {
                skipButton.disabled = true;
            }
        }
    }

    // End the game with a message
    function endGame(msg) {
        isGameActive = false;
        clearInterval(timer);
        backgroundSound.pause();
        gameOverSound.play();
        messageElement.textContent = msg;
        messageContainer.style.display = 'flex';
        document.querySelector('.message-buttons').style.display = 'block';
        skipButton.disabled = true;
    }

    // Shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
