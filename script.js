let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let p1Score = document.getElementById('p1Score');
let p2Score = document.getElementById('p2Score');
let turnDisplay = document.getElementById('turnDisplay');
let contBtn = document.getElementById('continue');
let display = document.getElementById('display');
let resetScore = document.getElementById('resetScore');
const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
let p1 = 0;
let p2 = 0;
p1Score.innerHTML = '0';
p2Score.innerHTML = '0';
CurrentPlayer = 1;
winner = 0;
gameEnded = false;

function reset() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    gameEnded = false;
}
function xwin() {
    if  ((box1.innerHTML == 'x' && box2.innerHTML == 'x' && box3.innerHTML == 'x')||
            (box4.innerHTML == 'x' && box5.innerHTML == 'x' && box6.innerHTML == 'x')||
            (box7.innerHTML == 'x' && box8.innerHTML == 'x' && box9.innerHTML == 'x')||
            (box1.innerHTML == 'x' && box4.innerHTML == 'x' && box7.innerHTML == 'x')||
            (box2.innerHTML == 'x' && box5.innerHTML == 'x' && box8.innerHTML == 'x')||
            (box3.innerHTML == 'x' && box6.innerHTML == 'x' && box9.innerHTML == 'x')||
            (box1.innerHTML == 'x' && box5.innerHTML == 'x' && box9.innerHTML == 'x')||
            (box3.innerHTML == 'x' && box5.innerHTML == 'x' && box7.innerHTML == 'x')) {
            display.innerHTML = 'PLAYER 1 WON';
            winner = 1;
            turnDisplay.innerHTML = 'Game Ended';
            p1 += 1;
            p1Score.innerHTML = p1;
            gameEnded = true;
            return;
        }
}
function owin() {
    if  ((box1.innerHTML == 'o' && box2.innerHTML == 'o' && box3.innerHTML == 'o')||
            (box4.innerHTML == 'o' && box5.innerHTML == 'o' && box6.innerHTML == 'o')||
            (box7.innerHTML == 'o' && box8.innerHTML == 'o' && box9.innerHTML == 'o')||
            (box1.innerHTML == 'o' && box4.innerHTML == 'o' && box7.innerHTML == 'o')||
            (box2.innerHTML == 'o' && box5.innerHTML == 'o' && box8.innerHTML == 'o')||
            (box3.innerHTML == 'o' && box6.innerHTML == 'o' && box9.innerHTML == 'o')||
            (box1.innerHTML == 'o' && box5.innerHTML == 'o' && box9.innerHTML == 'o')||
            (box3.innerHTML == 'o' && box5.innerHTML == 'o' && box7.innerHTML == 'o')) {
            display.innerHTML = 'PLAYER 2 WON';
            winner = 2;
            turnDisplay.innerHTML = 'Game Ended';
            p2 += 1;
            p2Score.innerHTML = p2;
            gameEnded = true;
            return;
        }
}
function full() {
    if 
        (winner != 1 && winner != 2 &&
        (box1.innerHTML != "")&&
        (box2.innerHTML != "")&&
        (box3.innerHTML != "")&&
        (box4.innerHTML != "")&&
        (box5.innerHTML != "")&&
        (box6.innerHTML != "")&&
        (box7.innerHTML != "")&&
        (box8.innerHTML != "")&&
        (box9.innerHTML != "")) {
        display.innerHTML = 'NO WINNER';
        turnDisplay.innerHTML = 'Game Ended';
        gameEnded = true;
    }
}
function scoreBoard() {
    if (winner == 1) {
        p1 += 1;
        return;
    }
    if (winner == 2) {
        p2 += 1;
        return;
    }
}

boxes.forEach(element => {
    element.addEventListener('click', (e) => {             
        if (CurrentPlayer == 1 && element.innerHTML == "" && gameEnded == false) {
            element.innerHTML = 'x';
            turnDisplay.innerHTML = 'Player 2';
            CurrentPlayer = 2;
            xwin();
            owin();
            full();
            return;
        }
        if(CurrentPlayer == 2 && element.innerHTML == "" &&  gameEnded == false) {
            element.innerHTML = 'o';
            turnDisplay.innerHTML = 'Player 1';
            CurrentPlayer = 1;
            xwin();
            owin();
            full();
            return;
        }
    });
});
contBtn.addEventListener('click', (e) => {
    if (winner == 1 || winner == 2 ||
        ((box1.innerHTML != "")&&
        (box2.innerHTML != "")&&
        (box3.innerHTML != "")&&
        (box4.innerHTML != "")&&
        (box5.innerHTML != "")&&
        (box6.innerHTML != "")&&
        (box7.innerHTML != "")&&
        (box8.innerHTML != "")&&
        (box9.innerHTML != "")))
        {turnDisplay.innerHTML = 'Game Ended';
        reset();
        display.innerHTML = '';
    }
    if (CurrentPlayer == 1) {
        turnDisplay.innerHTML = 'Player 1'
    }
    if (CurrentPlayer == 2) {
        turnDisplay.innerHTML = 'Player 2'
    }
});

scoreBoard();

resetScore.addEventListener('click', (e) => {
    if (p1 != 0 || p2 != 0) {
        p1 = 0;
        p2 = 0;
        p1Score.innerHTML = '0';
        p2Score.innerHTML = '0';
        resetScore.style = {'background-color':'red'};
    }
});
