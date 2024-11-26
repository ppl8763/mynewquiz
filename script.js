
let score = 0; // Store the score
const scoreElement = document.querySelector('.header-score');
const options = document.querySelectorAll('.option');
const nextBtn = document.querySelector('.next-btn');
let currentQuestionIndex = 0;

const questions = [
    {
        question: "What is the name of the highest civilian award in India?",
        options: [
            { text: "a. Bharat Ratna", isCorrect: true },
            { text: "b. Padma shri", isCorrect: false },
            { text: "c. Padma Bhushan", isCorrect: false },
            { text: "d. Padma Vibhusan", isCorrect: false }
        ]
    },
    {
        question: "Who was the first Indian woman to climb Mount Everest?",
        options: [
            { text: "a. Bachendri pal", isCorrect: false },
            { text: "b. Santosh yadav", isCorrect: true },
            { text: "c. Arunima sinha", isCorrect: false },
            { text: "d. Premlata Agarwal", isCorrect: false }
        ]
    },
    {
        question: "Who was the first Indian to win the Nobel prize?",
        options: [
            { text: "a. Rabindranath tagore", isCorrect: true },
            { text: "b. C.V Raman", isCorrect: false },
            { text: "c. Amartya Sen", isCorrect: false },
            { text: "d. Mother Teresa", isCorrect: false }
        ]
    },
    {
        question: "when will BBPS carnival held",
        options: [
            { text: "a. 27th sep", isCorrect: true },
            { text: "b. 28th sep", isCorrect: false },
            { text: "c. 25th sep", isCorrect: false },
            { text: "d. 30th sep", isCorrect: false }
       ]
    }, 
    {
        question: "Who is the first Indian woman to win an Olympic medal?",
        options: [
            { text: "a. Kranam Malleswari", isCorrect: true },
            { text: "b. P.V Sindhu", isCorrect: false },
            { text: "c. Saina Mirza", isCorrect: false },
            { text: "d. Saina Nehwal", isCorrect: false }
        ]
    },
    {
        question: "What is the name of the largest Indian state by area?",
        options: [
            { text: "a.Uttar pradesh ", isCorrect: false },

     { text: "b. Maharashtra", isCorrect: false },
      { text: "c. Madhya Pradesh", isCorrect: false },
      { text: "d. Rajasthan", isCorrect: true }
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
