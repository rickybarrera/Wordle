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
const keys = document.querySelector("#keyboard-container");
// console.log(keys.length);
keys.addEventListener('click', function(evt){
    if(currentGuess[0].length < 5){
        const key = evt.target.getAttribute("data-key")
        console.log(key);
        currentGuess[0].push(key);
        console.log(currentGuess[0]);
        console.log(currentGuess);
    }
    let answerCheck = currentGuess[0].join('');
    console.log(answerCheck);
    function checkWinner() {
        if (answerCheck === rightGuessString)
        { console.log("you win");
   
        }
    }
})
    

// 
// for (let i = 0; i < keys.length; i++) {
//     keys[i].onclick = ({ target }) => {
//         
//     };
// }
















// need to make function that puts guesses into squares and keeps
// track of them im thinking into empty arrays and win if string 
// matches rightGuessString
let allGuesses = [];
currentGuess.join(',');
console.log(allGuesses);
// for (let currentGuess = 0; currentGuess < 5;    )


// like function says you guessed it creates squares


// FUNCTIONS    
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
// function handlePlayerClick(evt) {
//     const 
//     }

















// word bank n win game
const wordBank = ['ABOUT','ANGER', 'MUSIC']
const guessNumber = 6;
let guessesLeft = guessNumber;

let nextLetter = 0;
let rightGuessString = wordBank[Math.floor(Math.random () * wordBank.length)]
 // winners function
 


