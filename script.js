const statusDisplay = document.querySelector('.gameStatus');

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

let gameActive = true;

let playerOne = "X";
let playerTwo = "O";

var flag = 1;

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

// funções para mudar o simbolo
function mudarSimbolo1() {
    if (flag == 1) {
        document.getElementById("b1").innerHTML = playerOne;
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").innerHTML = playerTwo;
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo2() {
    if (flag == 1) {
        document.getElementById("b2").innerHTML = playerOne;
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").innerHTML = playerTwo;
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo3() {
    if (flag == 1) {
        document.getElementById("b3").innerHTML = playerOne;
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").innerHTML = playerTwo;
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo4() {
    if (flag == 1) {
        document.getElementById("b4").innerHTML = playerOne;
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").innerHTML = playerTwo;
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo5() {
    if (flag == 1) {
        document.getElementById("b5").innerHTML = playerOne;
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").innerHTML = playerTwo;
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo6() {
    if (flag == 1) {
        document.getElementById("b6").innerHTML = playerOne;
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").innerHTML = playerTwo;
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo7() {
    if (flag == 1) {
        document.getElementById("b7").innerHTML = playerOne;
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").innerHTML = playerTwo;
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo8() {
    if (flag == 1) {
        document.getElementById("b8").innerHTML = playerOne;
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").innerHTML = playerTwo;
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function mudarSimbolo9() {
    if (flag == 1) {
        document.getElementById("b9").innerHTML = playerOne;
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").innerHTML = playerTwo;
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

/* --------- ATÉ AQUI TUDO OK -----------*/   

/* 
  0 0 0
  0 0 0
  0 0 0

Arrays com as condicoes de vitória 

1 1 1   1 0 0  1 0 0
0 0 0   1 0 0  0 1 0
0 0 0   1 0 0  0 0 1

0 0 0   0 1 0  0 0 1
1 1 1   0 1 0  0 1 0
0 0 0   0 1 0  1 0 0

0 0 0   0 0 1 
0 0 0   0 0 1
1 1 1   0 0 1  

    */

/* Validacao de vitoria */
function validarVitoria() {
    let vitoria = false;
    const array = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
    
}

/* Botão restart do jogo  OK */
function restart() {
    location.reload();
    b1 = document.getElementById("b1").value = " ";
    b2 = document.getElementById("b2").value = " ";
    b3 = document.getElementById("b3").value = " ";
    b4 = document.getElementById("b4").value = " ";
    b5 = document.getElementById("b5").value = " ";
    b6 = document.getElementById("b6").value = " ";
    b7 = document.getElementById("b7").value = " ";
    b8 = document.getElementById("b8").value = " ";
    b9 = document.getElementById("b9").value = " ";
}




/* 
   <-------  APENAS PARA SE BASEAR -------> 
// flag

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = playerOne;
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = playerTwo;
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

*/