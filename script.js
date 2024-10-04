// script.js

document.addEventListener('DOMContentLoaded', () => {
    // -------------------- Data Definitions --------------------
    const statements = {
        elementary: {
            bio: [
                { 
                    statement: 'The powerhouse of the cell.', 
                    term: 'mitochondria',
                    image: 'Images/Bio/Bio1.png' 
                },
                { 
                    statement: 'The process by which plants make their food.', 
                    term: 'photosynthesis',
                    image: 'Images/Bio/Bio2.png' 
                },
                { 
                    statement: 'A hollow, cone-shaped pump which is muscular in nature.', 
                    term: 'heart',
                    image: 'Images/Bio/Bio7.png' 
                },
                { 
                    statement: 'Which part of the plant holds it upright in the ground and absorbs water and nutrients?', 
                    term: 'roots' 
                },
                { 
                    statement: 'What is the largest organ in the human body?', 
                    term: 'skin' 
                },
                { 
                    statement: 'What do we call animals that eat only plants?', 
                    term: 'herbivores' 
                },
                { 
                    statement: 'Which animal is known for its ability to regenerate its tail if it gets cut off?', 
                    term: 'lizard' 
                },
                { 
                    statement: 'Which part of the flower becomes the fruit?', 
                    term: 'ovary' 
                },
                { 
                    statement: 'What do bees collect from flowers to make honey?', 
                    term: 'nectar' 
                },
                { 
                    statement: 'What do we call animals that are active during the night?', 
                    term: 'nocturnal' 
                },
                { 
                    statement: 'What do we call the living organisms that break down dead plants and animals?', 
                    term: 'decomposers' 
                },
                { 
                    statement: 'Which part of the tree helps it make food?', 
                    term: 'leaves' 
                },
                { 
                    statement: 'What part of the human body controls everything we do, like moving and thinking?', 
                    term: 'brain' 
                },
                { 
                    statement: 'What is the name of the small openings on the underside of leaves that help plants breathe?', 
                    term: 'stomata' 
                },
                { 
                    statement: 'What is the hard outer covering of insects called?', 
                    term: 'exoskeleton' 
                },
                { 
                    statement: 'What do we call the process where caterpillars turn into butterflies?', 
                    term: 'metamorphosis' 
                },
                { 
                    statement: 'What is a baby frog called?', 
                    term: 'tadpole' 
                },
                { 
                    statement: 'What type of animal lays eggs but feeds its babies with milk (a monotreme)?', 
                    term: 'platypus' 
                },
                { 
                    statement: 'What do whales use to communicate with each other underwater?', 
                    term: 'echolocation' 
                },
                { 
                    statement: 'Which part of the flower is responsible for producing seeds (located inside the ovary)?', 
                    term: 'ovules' 
                },
                { 
                    statement: 'What is the name of the smallest bone in the human body (it is located in the ear)?', 
                    term: 'stapes' 
                },
                { 
                    statement: 'Which part of the tree provides stability and holds the tree upright?', 
                    term: 'trunk' 
                },
                { 
                    statement: 'The study of naming and classifying organisms.', 
                    term: 'taxonomy',
                    image: 'Images/Bio/elementary/taxonomy.png' 
                },
                { 
                    statement: 'This organ stores urine.', 
                    term: 'bladder',
                    image: 'Images/Bio/Bio11.png' 
                }
            ],
            chem: [
                { 
                    statement: 'The basic unit of a chemical element.', 
                    term: 'atom',
                    image: 'Images/Chem/Chem1.png' 
                },
                { 
                    statement: 'A substance made up of only one type of atom.', 
                    term: 'element',
                    image: 'Images/Chem/Chem2.png' 
                },
                { 
                    statement: 'Another word for electron.', 
                    term: 'valence',
                    image: 'Images/Chem/Chem3.png' 
                },
                { 
                    statement: 'What does OH stand for?', 
                    term: 'hydroxide',
                    image: 'Images/Chem/Chem5.png' 
                },
                { 
                    statement: 'A positive charged ion.', 
                    term: 'cation',
                    image: 'Images/Chem/Chem6.png' 
                }
            ],
            physics: [
                { 
                    statement: 'The force that attracts a body towards the center of the earth.', 
                    term: 'gravity',
                    image: 'Images/Physics/Physics1.jpg' 
                },
                { 
                    statement: 'The speed of light in vacuum is approximately.', 
                    term: '299792458',
                    image: 'Images/Physics/Physics2.jpg' 
                },
                { 
                    statement: 'Unit of work.', 
                    term: 'joules',
                    image: 'Images/Physics/Physics5.png' 
                },
                { 
                    statement: 'Materials that do not allow the passage of electric current.', 
                    term: 'insulators',
                    image: 'Images/Physics/Physics13.jpg' 
                },
                { 
                    statement: 'What is the term for the amount of matter in an object?', 
                    term: 'mass',
                    image: 'Images/Physics/Physics14.jpg' 
                },
                { 
                    statement: 'The measurement of magnitude.', 
                    term: 'scalar' 
                },
                { 
                    statement: 'When two objects collide.', 
                    term: 'collision' 
                },
                { 
                    statement: 'The change in an object’s position.', 
                    term: 'displacement' 
                },
                { 
                    statement: 'A body\'s tendency to resist motion.', 
                    term: 'inertia' 
                },
                { 
                    statement: 'Measurement of magnitude and direction of movement.', 
                    term: 'vector' 
                }
            ]
        },
        highschool: {
            bio: [
                { 
                    statement: 'What molecule carries genetic information in living organisms?', 
                    term: 'DNA',
                    image: 'Images/Bio/BioHS1.png' 
                },
                { 
                    statement: 'Process by which organisms convert glucose and oxygen into energy.', 
                    term: 'cellular respiration',
                    image: 'Images/Bio/BioHS2.png' 
                },
                { 
                    statement: 'Where does photosynthesis take place in plant cells?', 
                    term: 'chloroplast',
                    image: 'Images/Bio/BioHS3.png' 
                },
                { 
                    statement: 'What is the basic structural and functional unit of life?', 
                    term: 'cell' 
                },
                { 
                    statement: 'What is the division of a cell nucleus resulting in two daughter cells?', 
                    term: 'mitosis' 
                }
            ],
            chem: [
                { 
                    statement: 'The table that arranges elements by their chemical properties.', 
                    term: 'periodic table',
                    image: 'Images/Chem/ChemHS1.png' 
                },
                { 
                    statement: 'The attraction between two oppositely charged ions.', 
                    term: 'ionic bond',
                    image: 'Images/Chem/ChemHS2.png' 
                },
                { 
                    statement: 'A type of bond where electrons are shared between atoms.', 
                    term: 'covalent bond' 
                },
                { 
                    statement: 'The ability of a substance to burn in the presence of oxygen.', 
                    term: 'combustion' 
                },
                { 
                    statement: 'The process by which a solid changes directly into gas without passing through the liquid state.', 
                    term: 'sublimation' 
                }
            ],
            physics: [
                { 
                    statement: 'The rate at which work is done.', 
                    term: 'power',
                    image: 'Images/Physics/PhysicsHS1.jpg' 
                },
                { 
                    statement: 'The property of an object that resists changes in motion.', 
                    term: 'inertia',
                    image: 'Images/Physics/PhysicsHS2.jpg' 
                },
                { 
                    statement: 'Force that opposes the relative motion of two surfaces.', 
                    term: 'friction' 
                },
                { 
                    statement: 'The acceleration due to gravity on Earth is approximately.', 
                    term: '9.8 m/s²' 
                },
                { 
                    statement: 'The point at which an object’s weight is evenly dispersed.', 
                    term: 'center of gravity' 
                }
            ]
        },
        college: {
            bio: [
                { 
                    statement: 'What is the primary molecule that carries energy in cells?', 
                    term: 'ATP',
                    image: 'Images/Bio/BioCollege1.png' 
                },
                { 
                    statement: 'The process by which cells divide to produce gametes.', 
                    term: 'meiosis',
                    image: 'Images/Bio/BioCollege2.png' 
                },
                { 
                    statement: 'The organelle responsible for protein synthesis.', 
                    term: 'ribosome',
                    image: 'Images/Bio/BioCollege3.png' 
                },
                { 
                    statement: 'What type of RNA carries genetic information from DNA to the ribosome?', 
                    term: 'mRNA' 
                },
                { 
                    statement: 'The process by which mRNA is decoded to produce a protein.', 
                    term: 'translation' 
                }
            ],
            chem: [
                { 
                    statement: 'What law states that the total energy of an isolated system is constant?', 
                    term: 'law of conservation of energy',
                    image: 'Images/Chem/ChemCollege1.png' 
                },
                { 
                    statement: 'The constant for ideal gas in PV=nRT equation.', 
                    term: 'R constant',
                    image: 'Images/Chem/ChemCollege2.png' 
                },
                { 
                    statement: 'A process that releases heat to the surroundings.', 
                    term: 'exothermic reaction' 
                },
                { 
                    statement: 'What theory explains the behavior of gases in terms of particles in motion?', 
                    term: 'kinetic molecular theory' 
                },
                { 
                    statement: 'What is the principle stating that in a chemical equilibrium, a system will adjust to counteract any changes imposed on it?', 
                    term: 'Le Chatelier’s Principle' 
                }
            ],
            physics: [
                { 
                    statement: 'The fundamental force responsible for the attraction between two masses.', 
                    term: 'gravitational force',
                    image: 'Images/Physics/PhysicsCollege1.jpg' 
                },
                { 
                    statement: 'What is the resistance of an object to any change in its velocity?', 
                    term: 'inertia',
                    image: 'Images/Physics/PhysicsCollege2.jpg' 
                },
                { 
                    statement: 'The product of mass and velocity of an object.', 
                    term: 'momentum' 
                },
                { 
                    statement: 'What quantity measures the force applied to an object over a distance?', 
                    term: 'work' 
                },
                { 
                    statement: 'The bending of light as it passes through different mediums.', 
                    term: 'refraction' 
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
