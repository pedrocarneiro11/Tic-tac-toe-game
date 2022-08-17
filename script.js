/*  ALTERAÇÕES PENDENTES:

- FAZER O WINDOW.ALERT APARECER APÓS O TABULEIRO SER DESATIVADO

*/
let playerOne = "X";
let playerTwo = "O";

var flag = 1;

var player;

tabuleiro = document.getElementsByClassName("tabuleiro");

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

function validarVitoria() {
                        /* <---------- PLAYER 1 -----------------> */
    if ((document.getElementById("b1").innerHTML == playerOne) && 
    (document.getElementById("b2").innerHTML == playerOne) &&
    (document.getElementById("b3").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b1").innerHTML == playerOne) && 
    (document.getElementById("b4").innerHTML == playerOne) &&
    (document.getElementById("b7").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b1").innerHTML == playerOne) && 
    (document.getElementById("b5").innerHTML == playerOne) &&
    (document.getElementById("b9").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;

    } else if ((document.getElementById("b4").innerHTML == playerOne) && 
    (document.getElementById("b5").innerHTML == playerOne) &&
    (document.getElementById("b6").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b2").innerHTML == playerOne) && 
    (document.getElementById("b5").innerHTML == playerOne) &&
    (document.getElementById("b8").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b2").innerHTML == playerOne) && 
    (document.getElementById("b5").innerHTML == playerOne) &&
    (document.getElementById("b8").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b3").innerHTML == playerOne) && 
    (document.getElementById("b5").innerHTML == playerOne) &&
    (document.getElementById("b7").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b7").innerHTML == playerOne) && 
    (document.getElementById("b8").innerHTML == playerOne) &&
    (document.getElementById("b9").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;

    } else if ((document.getElementById("b3").innerHTML == playerOne) && 
    (document.getElementById("b6").innerHTML == playerOne) &&
    (document.getElementById("b9").innerHTML == playerOne)) {
        vitoria = true;
        player = 1;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
                   /* <---------- PLAYER 2 -----------------> */

    else if ((document.getElementById("b1").innerHTML == playerTwo) && 
    (document.getElementById("b2").innerHTML == playerTwo) &&
    (document.getElementById("b3").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b1").innerHTML == playerTwo) && 
    (document.getElementById("b4").innerHTML == playerTwo) &&
    (document.getElementById("b7").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b1").innerHTML == playerTwo) && 
    (document.getElementById("b5").innerHTML == playerTwo) &&
    (document.getElementById("b9").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;

    } else if ((document.getElementById("b4").innerHTML == playerTwo) && 
    (document.getElementById("b5").innerHTML == playerTwo) &&
    (document.getElementById("b6").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b2").innerHTML == playerTwo) && 
    (document.getElementById("b5").innerHTML == playerTwo) &&
    (document.getElementById("b8").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b2").innerHTML == playerTwo) && 
    (document.getElementById("b5").innerHTML == playerTwo) &&
    (document.getElementById("b8").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b3").innerHTML == playerTwo) && 
    (document.getElementById("b5").innerHTML == playerTwo) &&
    (document.getElementById("b7").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

    } else if ((document.getElementById("b7").innerHTML == playerTwo) && 
    (document.getElementById("b8").innerHTML == playerTwo) &&
    (document.getElementById("b9").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;

    } else if ((document.getElementById("b3").innerHTML == playerTwo) && 
    (document.getElementById("b6").innerHTML == playerTwo) &&
    (document.getElementById("b9").innerHTML == playerTwo)) {
        vitoria = true;
        player = 2;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
}

/* criar uma terceira função, e colocar um delay para aparecer a mensagem de vitoria */

function vencedor() {
    if (vitoria == true) {
        if (player == 1) {
            window.alert("Jogador 1 venceu!!");
        } else if (player == 2) {
            window.alert("Jogador 2 venceu!!");
        }
    }  
}


/* Botão restart do jogo */

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
