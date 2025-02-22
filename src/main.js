import "./style.css";

// GAME INITIALISAZION
const starting = document.getElementById("app-one");
const gamePage = document.getElementById("app-two");
const startBtn = document.getElementById("start");

const initNumber = () => Math.floor(Math.random() * 500) + 1;
let machineNumber = initNumber();

startBtn?.addEventListener("click", () => {
  if (starting?.classList.contains("app-one")) {
    starting.classList.remove("app-one");
    starting.classList.add("app-two");
  }

  if (gamePage?.classList.contains("app-two")) {
    gamePage.classList.remove("app-two");
    gamePage.classList.add("app-one");
  }
  console.log(machineNumber);
});

// USER INPUT + UI

const formElement = document.getElementById("mainForm");
const resetBtn = document.getElementById("resetBtn");
const userInput = document.getElementById("input");
const userMessage = document.getElementById("hintText");
const attemps = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
let count = 0;

const cleanInput = () => {
  if (userInput instanceof HTMLInputElement) {
    userInput.value = "";
  }
};

formElement?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (attemps instanceof HTMLParagraphElement) {
    attemps.innerText = `Attempt(s): ${count++ + 1}`;
  }

  if (formElement instanceof HTMLFormElement) {
    const formData = new FormData(formElement);
    const userAnswer = Math.abs(Number(formData.get("answer")));
    if (userMessage instanceof HTMLParagraphElement)
      if (isNaN(userAnswer)) {
        cleanInput();
        return (userMessage.innerHTML = `<span style="color: red; font-weight: bold;">Your answer is not a number ! Please enter a number !</span>`);
      } else if (userAnswer < 1 || userAnswer > 500) {
        userMessage.innerHTML = `<span style="color: red; font-weight: bold;">❌ Number must be beetwen 1 and 500 !</span>`;
        return;
      } else if (userAnswer > machineNumber) {
        cleanInput();
        return (userMessage.innerText = `❌ The guess number is below ${userAnswer}`);
      } else if (userAnswer < machineNumber) {
        cleanInput();
        return (userMessage.innerText = `❌ The guess number is above ${userAnswer}`);
      } else {
        cleanInput();
        return (userMessage.innerText = `✅ Congratulation you found ${userAnswer} is guess 
          number in ${count} attemps 🎉`);
      }
  }
});

resetBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  cleanInput();

  if (attemps instanceof HTMLParagraphElement) {
    attemps.innerText = "";
  }
  count = 0;

  if (userMessage instanceof HTMLParagraphElement) {
    userMessage.innerText = "";
  }

  if (progressBar instanceof HTMLInputElement) {
    progressBar.value = "";
  }

  machineNumber = initNumber();
  console.log(machineNumber);
});
