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
let current = 0;
let i = 0;
let j = 1;
let start = 0;
let box 

// shows in console what clicks/important to eventually playing
const keys = document.querySelector("#keyboard-container");
// console.log(keys.length);
keys.addEventListener('click', function(evt){
    
    console.log(current);
    if(currentGuess[current].length < 5){
        const key = evt.target.getAttribute("data-key")
        console.log('key', key);
        currentGuess[current].push(key);
        let text = document.getElementById(j.toString())
        console.log('text:', text);
        text.innerText = currentGuess[current][i] 
        
        console.log('currentGuess', currentGuess[current][i]);
        i++ 
        j++
        
    let answerCheck = currentGuess[current].join('');
    console.log(answerCheck);
    
    for (let index = 0; index < rightGuessString.length; index++) {
        
    }
    
     if (answerCheck.length === 5) {
         console.log(current);
          if (current === 0) {
              start = 1;
            //  document.getElementById(current + 5)
          }
        for (let index = 0; index < answerCheck.length; index++) {
            if(answerCheck[index] === rightGuessString[index]){
                console.log(start);
                 box = document.getElementById(start.toString())
            box.style.color = 'green';
            }
            start++
        } 
          if (answerCheck !== rightGuessString){
            console.log("wrong");
        } else {
           keys.classList.add("disable-click")
          let resultss = document.getElementById('results')
          resultss.textContent = "You Win"
          console.log(resultss);
           // console.log("correct");  
        } while (answerCheck !== rightGuessString && i === 30){
            let resultss = document.getElementById('results')
            results.textContent = "ur trash"
        }
          
        } 
    } else {
        current++
        i = 0;
    }
})
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
const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadtButton.addEventListener("click", reload, false);


})
// word bank n win game
const wordBank = ['ABOUT','ANGER', 'MUSIC']
let rightGuessString = wordBank[Math.floor(Math.random () * wordBank.length)]
 // winners function 
 