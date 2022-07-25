const statusDisplay = document.querySelector('.gameStatus');

let gameActive = true;

let playerOne = "X";
let playerTwo = "O";

function mudarSimbolo() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    /* 
Arrays com as condicoes de vitória 

  0 1 2
  3 4 5
  6 7 8

    */
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];     
}

/* Validacao de vitoria */
function validarVitoria() {
    let vitoria = false;
}

/* Botão restart do jogo */
function restart() {
    location.reload();
    b1 = document.getElementById("b1").value = ' ';
    b2 = document.getElementById("b2").value = ' ';
    b3 = document.getElementById("b3").value = ' ';
    b4 = document.getElementById("b4").value = ' ';
    b5 = document.getElementById("b5").value = ' ';
    b6 = document.getElementById("b6").value = ' ';
    b7 = document.getElementById("b7").value = ' ';
    b8 = document.getElementById("b8").value = ' ';
    b9 = document.getElementById("b9").value = ' ';
}