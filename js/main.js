document.addEventListener("DOMContentLoaded", () => {
createSquares();

let currentGuess = [
    [],
    [],
    [],
    [],
    [],
    [],
];
// shows in console what clicks/important to eventually playing
const keys = document.querySelectorAll(".keyboard-row button");
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
        const key = target.getAttribute("data-key")
    currentGuess[0].push(key);
    console.log(currentGuess[0]);
    };
}
// need to make function that puts guesses into squares and keeps
// track of them im thinking into empty arrays and win if string 
// matches rightGuessString


// like function says you guessed it creates squares
function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
        let square = document.createElement("div")
        square.classList.add("square")
        square.setAttribute("id", index + 1)
        gameBoard.appendChild(square);
    }

}
})

// word bank n win game
const wordBank = ['about','anger', 'music']
const guessNumber = 6;
let guessesLeft = guessNumber;

let nextLetter = 0;
let rightGuessString = wordBank[Math.floor(Math.random () * wordBank.length)]
 // winners function
 function checkWinner () {
     if (currentGuess === rightGuessString)
     { console.log("you win")

     }
 }
