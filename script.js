let randomNumber1 = Math.floor(Math.random() * Math.floor(6));
let randomNumber2 = Math.floor(Math.random() * Math.floor(6));

function playerOneRoll(randomNumber1) {
    if (randomNumber1 === 1) {
        document.querySelector("img1").setAttribute("src", "dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "dice3.png");
    } else if (randomnumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "dice4.png");
    } else if (randomnumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "dice5.png");
    } else if (randomnumber1 === 6) {
        document.querySelector(".img1").setAttribute("src", "dice6.png");
    }
}

function playerTwoRoll(randomNumber2) {
    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "dice3.png");
    } else if (randomnumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "dice4.png");
    } else if (randomnumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "dice5.png");
    } else if (randomnumber2 === 6) {
        document.querySelector(".img2").setAttribute("src", "dice6.png");
    }
}

function gameResult() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
    }
}

window.addEventListener("DOMContentLoaded", playerOneRoll(randomNumber1));
window.addEventListener("DOMContentLoaded", playerTwoRoll(randomNumber2));
window.addEventListener("DOMContentLoaded", gameResult());