// Questions

// Shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    
    // Tools

    {
        question: "What is the shortcut for the Move tool?",
        correctAnswer: "V"
    },
    {
        question: "What is the shortcut for the Scale tool?",
        correctAnswer: "K"
    },
    {
        question: "What is the shortcut for the Frame tool?",
        correctAnswer: "F"
    },
    {
        question: "What is the shortcut for the Section tool?",
        correctAnswer: "Shift + S"
    },
    {
        question: "What is the shortcut for the Slice tool?",
        correctAnswer: "S"
    },
    {
        question: "What is the shortcut for the Rectangle tool?",
        correctAnswer: "R"
    },
    {
        question: "What is the shortcut for the Arrow tool?",
        correctAnswer: "Shift + L"
    },
    {
        question: "What is the shortcut for the Ellipse tool?",
        correctAnswer: "O"
    },
    {
        question: "What is the shortcut to Place image?",
        correctAnswer: "Cmd + Shift + K"
    },
    {
        question: "What is the shortcut for the Pen tool?",
        correctAnswer: "P"
    },
    {
        question: "What is the shortcut for the Pencil tool?",
        correctAnswer: "Shift + P"
    },
    {
        question: "What is the shortcut for the Text tool?",
        correctAnswer: "T"
    },
    {
        question: "What is the shortcut for the Resources tool?",
        correctAnswer: "Shift + I"
    },
    {
        question: "What is the shortcut for the Hand tool?",
        correctAnswer: "H"
    },
    {
        question: "What is the shortcut for the Comment tool?",
        correctAnswer: "C"
    },
    {
        question: "What is the shortcut for the Eyedropper tool?",
        correctAnswer: "I"
    },
    {
        question: "What is the shortcut for Quick actions?",
        correctAnswer: "Cmd + /"
    },
    {
        question: "What is the shortcut to Run last plugin?",
        correctAnswer: "Cmd + Opt + P"
    },
    
    // View

    {
        question: "What is the shortcut to toggle UI?",
        correctAnswer: "Cmd + ."
    },
    {
        question: "What is the shortcut to toggle Rulers?",
        correctAnswer: "Shift + R"
    },
    {
        question: "What is the shortcut to toggle Outline mode?",
        correctAnswer: "Cmd + Y"
    },
    {
        question: "What is the shortcut to toggle Layout grids?",
        correctAnswer: "Shift + G"
    },
    {
        question: "What is the shortcut to collapse layers?",
        correctAnswer: "Opt + L"
    },
    {
        question: "What is the shortcut to toggle the Layers panel?",
        correctAnswer: "Opt + 1"
    },
    {
        question: "What is the shortcut to toggle the Assets panel?",
        correctAnswer: "Opt + 2"
    },
    {
        question: "What is the shortcut to Find and Replace?",
        correctAnswer: "Cmd + F"
    },
    {
        question: "What is the shortcut to show Libraries?",
        correctAnswer: "Opt + 3"
    },
    {
        question: "What is the shortcut to toggle Design/Prototype panel?",
        correctAnswer: "Shift + E"
    },
    {
        question: "What is the shortcut to toggle comments?",
        correctAnswer: "Shift + C"
    },
    {
        question: "What is the shortcut to play Prototype",
        correctAnswer: "Cmd + Opt + Enter"
    },
    {
        question: "What is the shortcut to preview Prototype?",
        correctAnswer: "Shift + Space"
    },

    // Zoom

    {
        question: "What is the shortcut to Zoom in?",
        correctAnswer: "+"
    },
    {
        question: "What is the shortcut to Zoom out?",
        correctAnswer: "-"
    },
    {
        question: "What is the shortcut to Zoom to 100%?",
        correctAnswer: "Cmd + 0"
    },
    {
        question: "What is the shortcut to Zoom to fit?",
        correctAnswer: "Shift + 1"
    },
    {
        question: "What is the shortcut to Zoom to selection?",
        correctAnswer: "Shift + 2"
    },
    {
        question: "What is the shortcut to Zoom to previous frame?",
        correctAnswer: "Shift + N"
    },
    {
        question: "What is the shortcut to Zoom to next frame?",
        correctAnswer: "N"
    },
    {
        question: "What is the shortcut to Zoom in?",
        correctAnswer: "+"
    },

    // Text

    {
        question: "What is the shortcut for Bold text?",
        correctAnswer: "Cmd + B"
    },
    {
        question: "What is the shortcut for Italic text?",
        correctAnswer: "Cmd + I"
    },
    {
        question: "What is the shortcut for Underline text?",
        correctAnswer: "Cmd + U"
    },
    {
        question: "What is the shortcut for Strikethrough text?",
        correctAnswer: "Cmd + Shift + X"
    },
    {
        question: "What is the shortcut to create a text link?",
        correctAnswer: "Cmd + K"
    },
    {
        question: "What is the shortcut for Bulleted list",
        correctAnswer: "Cmd + Shift + 8"
    },
    {
        question: "What is the shortcut for Numbered list?",
        correctAnswer: "Cmd + Shift + 7"
    },
    {
        question: "What is the shortcut for Text align left?",
        correctAnswer: "Cmd + Opt + L"
    },
    {
        question: "What is the shortcut for Text align center?",
        correctAnswer: "Cmd + Opt + T"
    },
    {
        question: "What is the shortcut to Text align right?",
        correctAnswer: "Cmd + Opt + R"
    },
    {
        question: "What is the shortcut for Text align justified?",
        correctAnswer: "Cmd + Opt + J"
    },
    {
        question: "What is the shortcut to Zoom in?",
        correctAnswer: "+"
    },

    // Shape
    
    {
        question: "What is the shortcut for the Paint bucket tool?",
        correctAnswer: "B"
    },
    {
        question: "What is the shortcut to remove Fill?",
        correctAnswer: "Opt + /"
    },
    {
        question: "What is the shortcut remove Stroke?",
        correctAnswer: "Shift + /"
    },
    {
        question: "What is the shortcut to swap Fill and Stroke?",
        correctAnswer: "Shift + X"
    },
    {
        question: "What is the shortcut to Flatten selection?",
        correctAnswer: "Cmd + E"
    },
    
    // Selection

    {
        question: "What is the shortcut to Select all?",
        correctAnswer: "Cmd + A"
    },
    {
        question: "What is the shortcut to Select inverse?",
        correctAnswer: "Cmd + Shift + A"
    },
    {
        question: "What is the shortcut to Select none?",
        correctAnswer: "Esc"
    },
    {
        question: "What is the shortcut to Group selection?",
        correctAnswer: "Cmd + G"
    },
    {
        question: "What is the shortcut to Ungroup selection?",
        correctAnswer: "Cmd + Shift + G"
    },
    {
        question: "What is the shortcut to Frame selection?",
        correctAnswer: "Cmd + Opt + G"
    },
    {
        question: "What is the shortcut to Show/hide selection?",
        correctAnswer: "Cmd + Shift + H"
    },
    {
        question: "What is the shortcut to Lock/unlock selection?",
        correctAnswer: "Cmd + Shift + L"
    },
    
    // Edit

    {
        question: "What is the shortcut to Copy?",
        correctAnswer: "Cmd + C"
    },
    {
        question: "What is the shortcut to Cut?",
        correctAnswer: "Cmd + X"
    },
    {
        question: "What is the shortcut to Paste?",
        correctAnswer: "Cmd + V"
    },
    {
        question: "What is the shortcut to Paste to replace?",
        correctAnswer: "Cmd + Shift + R"
    },
    {
        question: "What is the shortcut to Paste over selection?",
        correctAnswer: "Cmd + Shift + V"
    },
    {
        question: "What is the shortcut to Duplicate?",
        correctAnswer: "Cmd + D"
    },
    {
        question: "What is the shortcut to Rename?",
        correctAnswer: "Cmd + R"
    },
    {
        question: "What is the shortcut to Export?",
        correctAnswer: "Cmd + Shift + E"
    },
    {
        question: "What is the shortcut to Copy as PNG?",
        correctAnswer: "Cmd + Shift + C"
    },
    {
        question: "What is the shortcut to Copy properties?",
        correctAnswer: "Cmd + Opt + C"
    },
    {
        question: "What is the shortcut to Paste properties?",
        correctAnswer: "Cmd + Opt + V"
    },

    // Transform
    {
        question: "What is the shortcut to Flip horizontal?",
        correctAnswer: "Shift + H"
    },
    {
        question: "What is the shortcut to Flip vertical?",
        correctAnswer: "Shift + V"
    },
    {
        question: "What is the shortcut to Resize frame to fit?",
        correctAnswer: "Cmd + Shift + Opt + R"
    },
    {
        question: "What is the shortcut to Bring to front?",
        correctAnswer: "Cmd + Opt + ]"
    },
    {
        question: "What is the shortcut to Bring forward?",
        correctAnswer: "Cmd + ]"
    },
    {
        question: "What is the shortcut to Send backwards?",
        correctAnswer: "Cmd + ["
    },
    {
        question: "What is the shortcut to Send to back?",
        correctAnswer: "Cmd + Opt + ["
    },

    // Components and Misc

    {
        question: "What is the shortcut to Create component?",
        correctAnswer: "Cmd + Opt + K"
    },
    {
        question: "What is the shortcut to Detach instance?",
        correctAnswer: "Cmd + Opt + B"
    },
    {
        question: "What is the shortcut to Add auto layout?",
        correctAnswer: "Shift + A"
    },
    {
        question: "What is the shortcut to Remove auto layout?",
        correctAnswer: "Shift + Opt + A"
    },
];

// Shuffle the order of questions
shuffleArray(questions);

// Logic
let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle answer options randomly
function shuffleAnswers(answers) {
  const shuffledAnswers = [...answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }
  return shuffledAnswers;
}

// Function to get random incorrect answers
function getRandomIncorrectAnswers(currentQuestion) {
  const incorrectAnswers = [];
  const possibleAnswers = questions.map((question) => question.correctAnswer);

  while (incorrectAnswers.length < 3) {
    const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    if (randomAnswer !== currentQuestion.correctAnswer && !incorrectAnswers.includes(randomAnswer)) {
      incorrectAnswers.push(randomAnswer);
    }
  }

  return incorrectAnswers;
}

// Function to add event listeners to answer buttons
function addAnswerButtonListeners() {
  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach((button) => {
    button.addEventListener("click", handleAnswerClick);
  });
}

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const scoreElement = document.getElementById("score");
    const answerButtons = document.querySelectorAll(".answer-button");
  
    // Reset the answer button colors
    answerButtons.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.border = "";
    });
  
    // Retrieve the number of questions from localStorage
    const numQuestions = parseInt(localStorage.getItem("numQuestions"), 10);
  
    // Check if the quiz has reached the specified number of questions
    if (currentQuestionIndex >= numQuestions) {
      // Quiz is finished
      redirectToQuizSummaryPage(); // Call the function to redirect
      return;
    }
  
    // Store the number of questions in localStorage
    localStorage.setItem("totalQuestions", numQuestions);
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    const incorrectAnswers = getRandomIncorrectAnswers(currentQuestion);
    incorrectAnswers.push(currentQuestion.correctAnswer);
  
    // Shuffle the answers to display them randomly
    const shuffledAnswers = shuffleAnswers(incorrectAnswers);
  
    answerButtons.forEach((button, index) => {
      button.textContent = shuffledAnswers[index];
    });
  
    scoreElement.textContent = "Score: " + score;
  
    // Re-add event listeners to answer buttons
    addAnswerButtonListeners();
}

// Function to check the selected answer
function checkAnswer(selectedAnswer, selectedAnswerButton) {
    const currentQuestion = questions[currentQuestionIndex];
  
    const answerButtons = document.querySelectorAll(".answer-button");
  
    answerButtons.forEach((button) => {
      button.removeEventListener("click", handleAnswerClick);
    });
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score += 100;
      currentQuestion.isCorrect = true; // Mark the question as correct
      selectedAnswerButton.style.backgroundColor = "#2FD675"; // Correct answer turns green
    } else {
      score -= 50;
      selectedAnswerButton.style.backgroundColor = "#F55D3E"; // Wrong answer turns red
  
      // Find the button with the correct answer and highlight it in green with a border
      answerButtons.forEach((button) => {
        if (button.textContent === currentQuestion.correctAnswer) {
          button.style.border = "2px solid #2FD675"; // Add border to correct answer
        }
      });
    }
  
    // Display the updated score immediately
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + score;
  
    // Remove the current event listeners from answer buttons to prevent further clicks
    answerButtons.forEach((button) => {
      button.removeEventListener("click", handleAnswerClick);
    });
  
    // Enable the "Next" button
    document.getElementById("next-button").disabled = false;
  }

// Add a boolean flag to control progression
let canProgress = false;

// Function to handle the "Next" button click
function handleNextButtonClick() {
  if (canProgress) {
    currentQuestionIndex++;
    displayQuestion();
    document.getElementById("next-button").disabled = true;
    canProgress = false;
  } else {
    alert("Please select an answer before moving to the next question.");
  }
}

// Function to handle answer button clicks
function handleAnswerClick(event) {
  const selectedAnswerButton = event.target;
  if (selectedAnswerButton && selectedAnswerButton.textContent) {
    const selectedAnswer = selectedAnswerButton.textContent;
    checkAnswer(selectedAnswer, selectedAnswerButton);
    canProgress = true;
  }
}

// Add event listeners to answer buttons once when the page loads
addAnswerButtonListeners();

// Add event listener to the "Next" button
document.getElementById("next-button").addEventListener("click", handleNextButtonClick);

// Start the quiz by displaying the first question
displayQuestion();




// Function to redirect to the quiz summary page
function redirectToQuizSummaryPage() {
    // Retrieve the number of questions from localStorage
    const totalQuestions = parseInt(localStorage.getItem("numQuestions"), 10);
  
    // Calculate the number of correct answers directly
    const correctAnswers = questions.filter((question) => question.isCorrect).length;
  
    // Include the score, total questions, and correct answers in the URL
    const url = `quiz-summary.html?score=${score}&correctAnswers=${correctAnswers}&totalQuestions=${totalQuestions}`;
    window.location.href = url;
}
