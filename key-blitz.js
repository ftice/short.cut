let questionsSeenCount = -1;

function startCountdown() {
    let count = 5; // starting count
    const countdownElement = document.getElementById('countdown');
    const countdownContainer = document.getElementById('countdown-container');
    const quizContainer = document.getElementById('quiz-container');
  
    const countdownInterval = setInterval(() => {
      count--;
      countdownElement.textContent = count;
  
      if (count <= 0) {
        clearInterval(countdownInterval);
        countdownContainer.style.display = 'none'; // Hide countdown display
        quizContainer.style.display = 'flex'; // Show game elements
        displayRandomQuestion();
        startTimer(); // Start the timer after the countdown
      }
    }, 1000);
}
  
function startTimer() {
    let timeLeft = 60; // Initialize timeLeft to 60 seconds
    const timerDisplay = document.getElementById('timer'); // Get the element where you want to display the timer
  
    const timerInterval = setInterval(() => {
      timeLeft--; // Decrement the timeLeft by 1 second
      timerDisplay.textContent = `${timeLeft}`; // Update the displayed time
  
        if (timeLeft === 0) {
            clearInterval(timerInterval); // Stop the timer when time runs out
            const score = parseInt(document.getElementById('score').textContent.split(':')[1]); // Get the score
            window.location.href = `blitz-summary.html?score=${score}&correctAnswers=${correctAnswersCount}&totalQuestions=${questionsSeenCount}`;
        }
    }, 1000); // Run the function every second (1000 milliseconds)

}
  
// Call the startCountdown function when the page loads
window.onload = function() {
    startCountdown();
};



// Shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Questions
const keyBlitzQuestions = [

    // Tools

        {
            question: "What is the shortcut for the Move tool?",
            correctAnswer: ["V"]
        },
        {
            question: "What is the shortcut for the Scale tool?",
            correctAnswer: ["K"]
        },
        {
            question: "What is the shortcut for the Frame tool?",
            correctAnswer: ["F"]
        },
        {
            question: "What is the shortcut for the Section tool?",
            correctAnswer: ["Shift", "S"]
        },
        {
            question: "What is the shortcut for the Slice tool?",
            correctAnswer: ["S"]
        },
        {
            question: "What is the shortcut for the Rectangle tool?",
            correctAnswer: ["R"]
        },
        {
            question: "What is the shortcut for the Arrow tool?",
            correctAnswer: ["Shift", "L"]
        },
        {
            question: "What is the shortcut for the Ellipse tool?",
            correctAnswer: ["O"]
        },
        {
            question: "What is the shortcut to Place image?",
            correctAnswer: ["Cmd", "Shift", "K"]
        },
        {
            question: "What is the shortcut for the Pen tool?",
            correctAnswer: ["P"]
        },
        {
            question: "What is the shortcut for the Pencil tool?",
            correctAnswer: ["Shift", "P"]
        },
        {
            question: "What is the shortcut for the Text tool?",
            correctAnswer: ["T"]
        },
        {
            question: "What is the shortcut for the Resources tool?",
            correctAnswer: ["Shift", "I"]
        },
        {
            question: "What is the shortcut for the Hand tool?",
            correctAnswer: ["H"]
        },
        {
            question: "What is the shortcut for the Comment tool?",
            correctAnswer: ["C"]
        },
        {
            question: "What is the shortcut for the Eyedropper tool?",
            correctAnswer: ["I"]
        },
        {
            question: "What is the shortcut for Quick actions?",
            correctAnswer: ["Cmd", "/"]
        },
        {
            question: "What is the shortcut to Run last plugin?",
            correctAnswer: ["Cmd", "Opt", "P"]
        },
        
    // View
    
        {
            question: "What is the shortcut to toggle UI?",
            correctAnswer: ["Cmd", "."]
        },
        {
            question: "What is the shortcut to toggle Rulers?",
            correctAnswer: ["Shift", "R"]
        },
        {
            question: "What is the shortcut to toggle Outline mode?",
            correctAnswer: ["Cmd", "Y"]
        },
        {
            question: "What is the shortcut to toggle Layout grids?",
            correctAnswer: ["Shift", "G"]
        },
        {
            question: "What is the shortcut to collapse layers?",
            correctAnswer: ["Opt", "L"]
        },
        {
            question: "What is the shortcut to toggle the Layers panel?",
            correctAnswer: ["Opt", "1"]
        },
        {
            question: "What is the shortcut to toggle the Assets panel?",
            correctAnswer: ["Opt", "2"]
        },
        {
            question: "What is the shortcut to Find and Replace?",
            correctAnswer: ["Cmd", "F"]
        },
        {
            question: "What is the shortcut to show Libraries?",
            correctAnswer: ["Opt", "3"]
        },
        {
            question: "What is the shortcut to toggle Design/Prototype panel?",
            correctAnswer: ["Shift", "E"]
        },
        {
            question: "What is the shortcut to toggle comments?",
            correctAnswer: ["Shift", "C"]
        },
    
    // Zoom
    
        {
            question: "What is the shortcut to Zoom in?",
            correctAnswer: ["+"]
        },
        {
            question: "What is the shortcut to Zoom out?",
            correctAnswer: ["-"]
        },
        {
            question: "What is the shortcut to Zoom to 100%?",
            correctAnswer: ["Cmd", "0"]
        },
        {
            question: "What is the shortcut to Zoom to fit?",
            correctAnswer: ["Shift", "1"]
        },
        {
            question: "What is the shortcut to Zoom to selection?",
            correctAnswer: ["Shift", "2"]
        },
        {
            question: "What is the shortcut to Zoom to previous frame?",
            correctAnswer: ["Shift", "N"]
        },
        {
            question: "What is the shortcut to Zoom to next frame?",
            correctAnswer: ["N"]
        },
        {
            question: "What is the shortcut to Zoom in?",
            correctAnswer: ["+"]
        },
    
    // Text
    
        {
            question: "What is the shortcut for Bold text?",
            correctAnswer: ["Cmd", "B"]
        },
        {
            question: "What is the shortcut for Italic text?",
            correctAnswer: ["Cmd", "I"]
        },
        {
            question: "What is the shortcut for Underline text?",
            correctAnswer: ["Cmd", "U"]
        },
        {
            question: "What is the shortcut for Strikethrough text?",
            correctAnswer: ["Cmd", "Shift", "X"]
        },
        {
            question: "What is the shortcut to create a text link?",
            correctAnswer: ["Cmd", "K"]
        },
        {
            question: "What is the shortcut for Bulleted list",
            correctAnswer: ["Cmd", "Shift", "8"]
        },
        {
            question: "What is the shortcut for Numbered list?",
            correctAnswer: ["Cmd", "Shift", "7"]
        },
        {
            question: "What is the shortcut for Text align left?",
            correctAnswer: ["Cmd", "Opt", "L"]
        },
        {
            question: "What is the shortcut for Text align center?",
            correctAnswer: ["Cmd", "Opt", "T"]
        },
        {
            question: "What is the shortcut to Text align right?",
            correctAnswer: ["Cmd", "Opt", "R"]
        },
        {
            question: "What is the shortcut for Text align justified?",
            correctAnswer: ["Cmd", "Opt", "J"]
        },
        {
            question: "What is the shortcut to Zoom in?",
            correctAnswer: ["+"]
        },
    
    // Shape
        
        {
            question: "What is the shortcut for the Paint bucket tool?",
            correctAnswer: ["B"]
        },
        {
            question: "What is the shortcut to remove Fill?",
            correctAnswer: ["Opt", "/"]
        },
        {
            question: "What is the shortcut remove Stroke?",
            correctAnswer: ["Shift", "/"]
        },
        {
            question: "What is the shortcut to swap Fill and Stroke?",
            correctAnswer: ["Shift", "X"]
        },
        {
            question: "What is the shortcut to Flatten selection?",
            correctAnswer: ["Cmd", "E"]
        },
        
    // Selection
    
        {
            question: "What is the shortcut to Select all?",
            correctAnswer: ["Cmd", "A"]
        },
        {
            question: "What is the shortcut to Select inverse?",
            correctAnswer: ["Cmd", "Shift", "A"]
        },
        {
            question: "What is the shortcut to Group selection?",
            correctAnswer: ["Cmd", "G"]
        },
        {
            question: "What is the shortcut to Ungroup selection?",
            correctAnswer: ["Cmd", "Shift", "G"]
        },
        {
            question: "What is the shortcut to Frame selection?",
            correctAnswer: ["Cmd", "Opt", "G"]
        },
        {
            question: "What is the shortcut to Show/hide selection?",
            correctAnswer: ["Cmd", "Shift", "H"]
        },
        {
            question: "What is the shortcut to Lock/unlock selection?",
            correctAnswer: ["Cmd", "Shift", "L"]
        },
        
    // Edit
    
        {
            question: "What is the shortcut to Copy?",
            correctAnswer: ["Cmd", "C"]
        },
        {
            question: "What is the shortcut to Cut?",
            correctAnswer: ["Cmd", "X"]
        },
        {
            question: "What is the shortcut to Paste?",
            correctAnswer: ["Cmd", "V"]
        },
        {
            question: "What is the shortcut to Paste to replace?",
            correctAnswer: ["Cmd", "Shift", "R"]
        },
        {
            question: "What is the shortcut to Paste over selection?",
            correctAnswer: ["Cmd", "Shift", "V"]
        },
        {
            question: "What is the shortcut to Duplicate?",
            correctAnswer: ["Cmd", "D"]
        },
        {
            question: "What is the shortcut to Rename?",
            correctAnswer: ["Cmd", "R"]
        },
        {
            question: "What is the shortcut to Export?",
            correctAnswer: ["Cmd", "Shift", "E"]
        },
        {
            question: "What is the shortcut to Copy as PNG?",
            correctAnswer: ["Cmd", "Shift", "C"]
        },
        {
            question: "What is the shortcut to Copy properties?",
            correctAnswer: ["Cmd", "Opt", "C"]
        },
        {
            question: "What is the shortcut to Paste properties?",
            correctAnswer: ["Cmd", "Opt", "V"]
        },
    
    // Transform
        {
            question: "What is the shortcut to Flip horizontal?",
            correctAnswer: ["Shift", "H"]
        },
        {
            question: "What is the shortcut to Flip vertical?",
            correctAnswer: ["Shift", "V"]
        },
        {
            question: "What is the shortcut to Bring to front?",
            correctAnswer: ["Cmd", "Opt", "]"]
        },
        {
            question: "What is the shortcut to Bring forward?",
            correctAnswer: ["Cmd", "]"]
        },
        {
            question: "What is the shortcut to Send backwards?",
            correctAnswer: ["Cmd", "["]
        },
        {
            question: "What is the shortcut to Send to back?",
            correctAnswer: ["Cmd", "Opt", "["]
        },
    
    // Components and Misc
    
        {
            question: "What is the shortcut to Create component?",
            correctAnswer: ["Cmd", "Opt", "K"]
        },
        {
            question: "What is the shortcut to Detach instance?",
            correctAnswer: ["Cmd", "Opt", "B"]
        },
        {
            question: "What is the shortcut to Add auto layout?",
            correctAnswer: ["Shift", "A"]
        },
        {
            question: "What is the shortcut to Remove auto layout?",
            correctAnswer: ["Shift", "Opt", "A"]
        },

];

// Shuffle the order of questions
shuffleArray(keyBlitzQuestions);

// Function to get a random question
function getRandomKeyBlitzQuestion() {
  return keyBlitzQuestions[
    Math.floor(Math.random() * keyBlitzQuestions.length)
  ];
}

// Function to display the boxes based on the number of keys needed
function displayShortcutBoxes(keys) {
    const container = document.getElementById('key-boxes');

    container.innerHTML = ''; // Clear previous boxes
    
    keys.forEach(key => {
      const box = document.createElement('div');
      box.classList.add('shortcut-box');
      
      if (key === 'Cmd' || key === 'Opt' || key === 'Shift') {
        box.textContent = key.slice(0, 3); // Display first three letters for modifiers
      } else {
        box.textContent = key;
      }
      
      container.appendChild(box);
    });
}



// Function to handle displaying a random question and its shortcut boxes
function displayRandomQuestion() {
    const questionObj = getRandomKeyBlitzQuestion();
    const question = questionObj.question;
    const shortcut = questionObj.correctAnswer;
  
    const questionContainer = document.getElementById('key-blitz-question');
    questionContainer.textContent = question;
  
    const boxesContainer = document.getElementById('key-boxes');
    boxesContainer.innerHTML = ''; // Clear any previous boxes
  
    const boxes = []; // Store reference to all boxes
    shortcut.forEach((key, index) => {
      const box = document.createElement('div');
      box.classList.add('shortcut-box');
      box.setAttribute('contenteditable', 'true'); // Allow key presses in the box
      box.textContent = ''; // Set initial content to empty
  
      // Store reference to the box
      boxes.push(box);
  
      box.addEventListener('keydown', function(event) {
        event.preventDefault();
  
        let pressedKey = event.key;
        if (shortcut.length === 1) {
          if (!isLetterNumberOrSymbol(pressedKey)) {
            return; // Allow only specified keys for single-key shortcuts
          }
        } else if (shortcut.length === 2) {
          if (index === 0) {
            if (!isCommandShiftOrOption(pressedKey)) {
              return; // Allow only Command, Shift, or Option in the first box
            }
          } else {
            if (!isLetterNumberOrSymbol(pressedKey)) {
              return; // Allow only specified keys in the second box
            }
          }
        } else if (shortcut.length === 3) {
          if (index < 2) {
            if (!isCommandShiftOrOption(pressedKey)) {
              return; // Allow only Command, Shift, or Option in the first two boxes
            }
          } else {
            if (!isLetterNumberOrSymbol(pressedKey)) {
              return; // Allow only specified keys in the third box
            }
          }
        }
  
        if (isLetter(pressedKey)) {
          pressedKey = pressedKey.toUpperCase(); // Convert individual letter keys to uppercase
        } else {
          pressedKey = getDisplayKeyName(pressedKey); // Convert modifier keys to custom names
        }
        box.textContent = pressedKey;
  
        // Focus on the next box or remove focus if all boxes are filled
        const nextBoxIndex = index + 1;
        if (nextBoxIndex < boxes.length) {
          boxes[nextBoxIndex].focus();
        } else {
          box.blur(); // Remove focus from the last box after filling all boxes
          verifyAnswer(shortcut, boxes);
        }
      });
  
      boxesContainer.appendChild(box);
    });
  
    // Focus on the first box
    boxes[0].focus();
    
    // Increment the counter for each question displayed
    questionsSeenCount++;
}
  
// Function to verify the user's answer
let correctAnswersCount = 0; // Initialize the count of correct answers

function verifyAnswer(correctAnswer, boxes) {
    const userInput = boxes.map(box => box.textContent).join('');
    const correct = userInput === correctAnswer.join('');
  
    const scoreDisplay = document.getElementById('score');
    let score = parseInt(scoreDisplay.textContent.split(':')[1]); // Get the current score
    
    if (correct) {
      boxes.forEach(box => {
        box.style.backgroundColor = '#2FD675'; // Change background color to green for correct answer
      });
      correctAnswersCount++;
      score += 100; // Increase score for a correct answer
    } else {
      boxes.forEach(box => {
        box.style.backgroundColor = '#F55D3E'; // Change background color to red for incorrect answer
      });
      score = score - 50; // Decrease score for a wrong answer
    }
  
    scoreDisplay.textContent = `Score: ${score}`; // Update the score display
    
    setTimeout(() => {
      // Reset background color after 3 seconds
      boxes.forEach(box => {
        box.style.backgroundColor = ''; // Reset background color
      });
      displayRandomQuestion(); // Proceed to the next question after 3 seconds
    }, 1500);
}

// Helper functions to check allowed keys for each scenario
  function isLetterNumberOrSymbol(key) {
    return /^[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]$/.test(key);
  }
  
  function isCommandShiftOrOption(key) {
    return ['Meta', 'Shift', 'Alt'].includes(key);
  }
  
  function isLetter(key) {
    return /^[a-zA-Z]$/.test(key); // Check if the key is a letter
  }
  
  function getDisplayKeyName(key) {
    const keyMap = {
      Meta: 'Cmd',
      Alt: 'Opt',
      Shift: 'Shift'
    };
    return keyMap[key] || key; // Return custom display name if found, else return the key itself
}
  
// Call this function to display a random question with empty shortcut boxes
displayRandomQuestion();