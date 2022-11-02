/*----- constants -----*/

/*----- state variables -----*/
let currentPlayer = "X";

/*----- cached elements  -----*/
let pEl = document.getElementById("announcer");
let tilesEl = document.querySelectorAll(".tiles");
let buttonEl = document.querySelector("button");
let squareEl = document.getElementById("whole-square");
/*----- event listeners -----*/
squareEl.addEventListener("click", render);
buttonEl.addEventListener("click", reset);

let board = ["", "", "", "", "", "", "", "", ""];
let winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*----- functions -----*/
render();
function render(event) {
  let link = event.target;
  link.textContent = currentPlayer;
  board[parseInt(event.target.id)] = currentPlayer;
  console.log(event.target);
  console.log(board);
  takingTurns();
  winning();
}
function takingTurns() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function winning() {
  winningArray.forEach((winningCondition) => {
    if (
      board[winningCondition[0]] +
        board[winningCondition[1]] +
        board[winningCondition[2]] ===
        "XXX" ||
      board[winningCondition[0]] +
        board[winningCondition[1]] +
        board[winningCondition[2]] ===
        "OOO"
    ) {
      pEl.textContent = "congrats";
      return;
    }
  });
}

function reset() {
  tilesEl.textContent = "";
}
