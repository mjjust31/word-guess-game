let wins = 0;
let losses = 0;
let ties = 0;
const words = ["javascript", "computer", "hollywood", "mongoose", "sequelize"];

const playGame = () => {
  //timer will need to go here
  // startTimer();

  //now the chosen Work will need to get appeending to the page but it should be hidden
  let chosenWord = getChosenWord();
  console.log(chosenWord);
  if (chosenWord) {
    const wordDisplayEl = document.querySelector(".word-display");
    const answerLetters = chosenWord.split("");
    for (let i = 0; i < answerLetters.length; i++) {
      const pTag = document.createElement("p");
      pTag.textContent = answerLetters[i];
      wordDisplayEl.appendChild(pTag);
    }
  }
};
const startTimer = () => {};

//get a random word to guess
const getChosenWord = () => {
  let index = Math.floor(Math.random() * words.length);
  let chosenWord = words[index];
  return chosenWord;
};

playGame();
