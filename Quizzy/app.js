const quiz = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Green", "Red", "Yellow"],
    correct: 0,
  },
  {
    question: "2 + 2 = ?",
    answers: ["1", "3", "4", "5"],
    correct: 2,
  },
  {
    question: "How many legs does a dog have?",
    answers: ["2", "3", "4", "6"],
    correct: 2,
  },
  {
    question: "Which one is a fruit?",
    answers: ["Car", "Rock", "Apple", "Chair"],
    correct: 2,
  },
  {
    question: "Sun is a?",
    answers: ["Planet", "Moon", "Star", "Comet"],
    correct: 2,
  },
  {
    question: "Fish lives in?",
    answers: ["Sky", "Fire", "Water", "Sand"],
    correct: 2,
  },
  {
    question: "HTML is used for?",
    answers: ["Logic", "Design", "Structure", "Database"],
    correct: 2,
  },
  {
    question: "CSS is used for?",
    answers: ["Database", "Server", "Design", "Math"],
    correct: 2,
  },
  {
    question: "JavaScript is used for?",
    answers: ["Photos", "Logic", "Styling", "Writing"],
    correct: 1,
  },
  {
    question: "Which one is a browser?",
    answers: ["Linux", "Chrome", "Android", "CPU"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

// Screens
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// Start quiz
function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  document.getElementById("total").innerText = quiz.length;
  showQuestion();
}

// Show question
function showQuestion() {
  const q = quiz[currentQuestion];

  document.getElementById("question").innerText = q.question;
  document.getElementById("btn0").innerText = q.answers[0];
  document.getElementById("btn1").innerText = q.answers[1];
  document.getElementById("btn2").innerText = q.answers[2];
  document.getElementById("btn3").innerText = q.answers[3];
  document.getElementById("current").innerText = currentQuestion + 1;

  updateProgress();
}

// Check answer
function checkAnswer(index) {
  if (index === quiz[currentQuestion].correct) {
    score++;
    document.getElementById("score").innerText = score;
  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Progress bar
function updateProgress() {
  const percent = (currentQuestion / quiz.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// Show result screen
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  document.getElementById("finalScore").innerText = score + " / " + quiz.length;
}

// Restart quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").innerText = 0;
  document.getElementById("progressBar").style.width = "0%";

  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}
