var p1Button = document.querySelector("#p1B");
var p2Button = document.querySelector("#p2B");
var resButton = document.querySelector("#resB");

var text = document.querySelector("#points");

var p1Score = document.querySelector("#pOne");
var p2Score = document.querySelector("#pTwo");

var game = document.querySelector("#gameOver");
var gameInt = game.textContent;
console.log(gameInt);

var p1 = 0;
var p2 = 0;
var gameOver = false;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1++;
        p1Score.textContent = p1;
        if (checkGameOver(p1, game)) {
            p1Score.classList.add("winner");
        }
    }
});
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2++;
        p2Score.textContent = p2;
        if (checkGameOver(p2, game)) {
            p2Score.classList.add("winner");
        }
    }
});
resButton.addEventListener("click", function() {
    p1 = 0;
    p2 = 0;
    p1Score.textContent = p1;
    p2Score.textContent = p2;
    gameOver = false;
});

function checkGameOver(score, game) {
    if (score == gameInt) {
        gameOver = true;
        return true;
    }
    return false;
}