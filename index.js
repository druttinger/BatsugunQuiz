const questions = [
  [
    "Who was the founder of Kodokan Judo?",
    ["Jigoro Kano", "Jigoro Kano", "Jigoro Kano", "Carlos Gracie"],
  ],
  [
    "What do you call a step in which you move forward or back without passing the feet?",
    ["Tsugi Ashi", "Galloping", "Stepping in for ippon", "Sliding in"],
  ],
  [
    "What does 'batsugun' mean?",
    [
      "I throw everybody",
      "I am the best",
      "I am the strongest",
      "I am amazing",
    ],
  ],
  [
    "What was an early influence on Judo?",
    [
      "Ten'jin Shinyō-ryū",
      "Kito-ryū",
      "Western wrestling",
      "DaoXue (道学, Zhuxi Confucianism)",
    ],
  ],
  [
    "Which of the following is not ashi waza?",
    ["Seoi Nage", "Uchi Mata (the way I do it)", "Koshi Guruma", "Daki Wakare"],
  ],
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const scoreInfo = [
  "",
  " Great Start!",
  " Good Job!",
  " Excellent!",
  " Outstanding!",
  " Perfect Score! You should get a bonus rank!",
];

let score = 0;

function updateScore() {
  const scoreElement = document.getElementById("score-value");
  const scoreContainer = document.getElementById("score");

  // Add animation class
  scoreContainer.style.animation = "scoreUpdate 0.5s ease-in-out";

  // Update the score text
  scoreElement.innerText = score + (scoreInfo[score] || "");
}

function main() {
  const quiz = document.getElementById("quiz");
  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = question[0];
    quiz.appendChild(questionElement);

    const answers = question[1];
    const answerList = document.createElement("ul");
    answerList.classList.add("answer-list");
    answerList.dataset.questionIndex = index;

    answers.forEach((answer, i) => {
      const answerItem = document.createElement("li");
      answerItem.innerText = `${alphabet[i]}. ${answer}`;
      answerItem.classList.add("answer");

      answerItem.addEventListener("click", () => {
        // Check if any answer in this question is already highlighted
        const questionAnswers = answerList.querySelectorAll(".answer");
        const alreadyAnswered = Array.from(questionAnswers).some((item) =>
          item.classList.contains("selected")
        );

        // Only proceed if no answer is already selected for this question
        if (!alreadyAnswered) {
          // Increase score by 1
          score++;
          updateScore();

          // Highlight the selected answer and add "Correct" text
          answerItem.classList.add("selected");
          const newHTML = `${alphabet[i]}. ${answer} <span class="correct-label">Correct</span>`;
          answerItem.innerHTML = newHTML;
          console.log("Updated HTML:", newHTML);
        }
      });

      answerList.appendChild(answerItem);
    });
    quiz.appendChild(answerList);
  });
}

main();
