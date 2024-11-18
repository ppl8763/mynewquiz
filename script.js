
let score = 0; // Store the score
const scoreElement = document.querySelector('.header-score');
const options = document.querySelectorAll('.option');
const nextBtn = document.querySelector('.next-btn');
let currentQuestionIndex = 0;

const questions = [
    {
        question: "What Does HTML stand for?",
        options: [
            { text: "a. HyperText Markup Language", isCorrect: true },
            { text: "b. HighText Markup Language", isCorrect: false },
            { text: "c. Hyper Trainer Marking Language", isCorrect: false },
            { text: "d. HyperText Markup Language", isCorrect: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        options: [
            { text: "a. Creative Style Sheets", isCorrect: false },
            { text: "b. Cascading Style Sheets", isCorrect: true },
            { text: "c. Computer Style Sheets", isCorrect: false },
            { text: "d. Colorful Style Sheets", isCorrect: false }
        ]
    },
    {
        question: "Which HTML element is used to display a picture?",
        options: [
            { text: "a. <img>", isCorrect: true },
            { text: "b. <picture>", isCorrect: false },
            { text: "c. <image>", isCorrect: false },
            { text: "d. <photo>", isCorrect: false }
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            { text: "a. background-color", isCorrect: true },
            { text: "b. color-background", isCorrect: false },
            { text: "c. bg-color", isCorrect: false },
            { text: "d. bgcolor", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: [
            { text: "a. Number", isCorrect: false },

      { text: "b. Boolean", isCorrect: false },
      { text: "c. String", isCorrect: false },
      { text: "d. Character", isCorrect: true }
    ]
  }
];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionText = document.querySelector('.question-text');
  questionText.textContent = currentQuestion.question;

  options.forEach((option, index) => {
    option.querySelector('span').textContent = currentQuestion.options[index].text;
    option.setAttribute('data-answer', currentQuestion.options[index].isCorrect ? 'correct' : 'incorrect');
    option.classList.remove('correct', 'incorrect'); // Clear previous selection styles
    option.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target.closest('.option'); // Get the clicked option element
  const isCorrect = selectedOption.dataset.answer === 'correct'; // Check if it's marked 'correct'
  
  if (isCorrect) {
    score++; // Increase score if correct
    scoreElement.textContent = score;
    selectedOption.classList.add('correct'); // Add 'correct' class for styling
  } else {
    selectedOption.classList.add('incorrect'); // Add 'incorrect' class for styling
  }

  // Disable click events on options after selection (optional)
  options.forEach(option => option.removeEventListener('click', checkAnswer));
}

loadQuestion(); // Load the first question on page load

// Add event listener for next button (assuming you have logic to move to the next question)
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Handle the end of the quiz (e.g., display results, disable next button)
  }
});
