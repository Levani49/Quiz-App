const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  shuffleQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {}

const question = [
  {
    question: "what is 2 + 2",
    answer: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "4", correct: false },
      { text: "4", correct: false },
    ],
  },
];
