"use strict";

/*console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🏆Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// boton de check!!!
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when no number input
  if (!guess) {
    displayMessage("❌Wrong Number");
    //document.querySelector(".message").textContent = "❌Wrong Number";

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🏆Correct Number!");
    //document.querySelector(".message").textContent = "🏆Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //codigo corto mas optimo
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🧨Too High" : "🧨Too Low");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "🧨Too High" : "🧨Too Low";
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🎇Game Over!!");
      //document.querySelector(".message").textContent = "🎇Game Over!!";
      document.querySelector(".score").textContent = 0;
      displayBackground("red");
      //document.querySelector("body").style.backgroundColor = "red";
    }
  }

  // whe player is too high Codigo largo
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "🧨Too High";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🎇Game Over!!";
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector("body").style.backgroundColor = "red";
  //     }
  //     // whe player is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "🧨Too Low";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector(".message").textContent = "🎇Game Over!!";

  //       document.querySelector("body").style.backgroundColor = "red";
  //     }
  //   }
});
// boton de again!!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  //document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
