
// we define some variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
//simulation of computer choice
function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}
function wins(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
}
function lose(user,computer){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose!`;
}
function draw(user,computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} equals ${convertToWord(user)}${smallUserWord}. It's a draw.`;
}
//we define a function that going to make the game
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sr":
      wins(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
  }
}
function main(){
  //we add an event listener on each button
  rock_div.addEventListener('click',function(){
    game("r")
  });
  paper_div.addEventListener('click',function(){
    game("p")
  });
  scissors_div.addEventListener('click',function(){
    game("s")
  });
}
main();
