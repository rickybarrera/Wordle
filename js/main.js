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
let current = 0 
// shows in console what clicks/important to eventually playing
const keys = document.querySelector("#keyboard-container");
// console.log(keys.length);
keys.addEventListener('click', function(evt){
    if(currentGuess[0].length < 5){
        const key = evt.target.getAttribute("data-key")
        console.log(key);
        currentGuess[0].push(key);
        for (let i = 0; i < currentGuess[current].length; i++) {
            let text = document.getElementById(`${i + 1}`)
            text.innerText = currentGuess[current][i]
        if (currentGuess[current][i] === rightGuessString){
            break;
        } else 
            {

            }
            
        // target divs/ square 1
        console.log(currentGuess[0]);
        console.log(currentGuess);
    }
    
    
      
    
    let answerCheck = currentGuess[0].join('');
    console.log(answerCheck);
     if (answerCheck.length === 5) {
          if (answerCheck === rightGuessString){
            console.log("you win");
        } else {
            console.log("you lose")
        }
            
        }
    }
function displayText(){
    
}


// need to make function that puts guesses into squares and keeps
// track of them im thinking into empty arrays and win if string 
// matches rightGuessString  
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
// word bank n win game
const wordBank = ['ABOUT','ANGER', 'MUSIC']
let rightGuessString = wordBank[Math.floor(Math.random () * wordBank.length)]
 // winners function 