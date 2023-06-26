const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
 

const quizData = [
  {
    question: "I often make excuses to not get out of my room",
    a: "1. Strongly disagree",
    b: "2. Disagree",
    c: "3. Not sure",
    d: "4. Somewhat agree",
    e: "5. Agree"
  },
  {
    question: "I often practice a conversation before having it.",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "I often avoid talking face to face with someone.",
    a: "1. Strongly disagree",
    b: "2. Disagree",
    c: "3. Not sure",
    d: "4. Somewhat agree",
    e: "5. Agree"
  },
  {
    question: "I often avoid calls and make excuses later.",
    a: "1. Strongly disagree",
    b: "2. Disagree",
    c: "3. Not sure",
    d: "4. Somewhat agree",
    e: "5. Agree"
  },
  {
    question: "I often avoid going to parties and social events",
    a: "1. Strongly disagree",
    b: "2. Disagree",
    c: "3. Not sure",
    d: "4. Somewhat agree",
    e: "5. Agree"
  },
];

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};


const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();


submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].a) score++;
    currentQuiz++;
  }
    if (answer === quizData[currentQuiz].b) score = score +2;{
    currentQuiz++;
    };
    if (answer === quizData[currentQuiz].c) score = score +3;{
      currentQuiz++;
      };
      if (answer === quizData[currentQuiz].d) score = score +4;{
        currentQuiz++;
        };
        if (answer === quizData[currentQuiz].d) score = score +5;{
          currentQuiz++;
          };
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      var percent = score /100 *2;
      quiz.innerHTML = `
            <h2>You have ${score}/${quizData.length} points, that's ${percent} probability of having social anxiety.</h2>
            <button onclick="history.go(0)">Play Again</button>
        ` // location.reload() won't work in CodePen for security reasons;
    }
  
  });
