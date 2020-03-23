const readlineSync = require('readline-sync');
let board = {};
//игровое поле
function makeBoard(){
    board = {
    1: '1', 2: '2', 3: '3',
    4: '4', 5: '5', 6: '6',
    7: '7', 8: '8', 9: '9'
    }
}
//функци для отметки клетки играком
function makePosition(position, mark) {
    board[position] = mark;
}
//функция печати в консоль
function printBoard() {
    console.log('\n' +
         + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
         + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
         + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
    );
}
//функция проверки свободной клетки
function validate(position) {
    return (board[position] === position);
}
//функция сравнения
function isEqual(arr){
        return (arr[0] === arr[1] && arr[0] === arr[2]);
}
//функция проверки выигрышной комбинации
function win() {
    if(
        //сравниваем строки
        isEqual([board[1], board[2], board[3]]) ||
        isEqual([board[4], board[5], board[6]]) ||
        isEqual([board[7], board[8], board[9]]) ||
        //сравниваем столбцы
        isEqual([board[1], board[4], board[7]]) ||
        isEqual([board[2], board[5], board[8]]) ||
        isEqual([board[3], board[6], board[9]]) ||
        //сравниваем диагонали
        isEqual([board[1], board[5], board[9]]) ||
        isEqual([board[3], board[5], board[7]])
    ) return true;
}

//ходы игроков
function game(p1, p2){
    let count = 0;
    while( count < 9 ){
        printBoard();
        let position1 = ' ';
        do{
            position1 = readlineSync.question('Игрок №1 Выберите свободную клетку : ');
        }while(!validate(position1));
        makePosition(position1, p1);
        printBoard();
        if(win()) { console.log('Win!'); break; }
        count += 1;
        let position2 = ' ';
        do{
            position2 = readlineSync.question('Игрок №2 Выберите свободную клетку : ');
        }while(!validate(position2));
        makePosition(position2, p2);
        printBoard();
        if(win()) { console.log('Win!'); break; }
        count += 1;
        console.log(count);
    }
    console.log('Game over!');
}

//const player1 = readlineSync.question('Игрок №1 Выберите Х или О: ');
//const player2 = player1 === 'X' ? 'O' : 'X';
let player1 = "";
let player2 = "";

function setPlayer(str){
    player1 = str;
    player2 = player1 === 'X' ? 'O' : 'X';
}

//game(player1, player2);

module.exports = {
    //game,
    makePosition,
    makeBoard,
    win,
    isEqual,
    validate,
    printBoard,
    setPlayer,
    player1,
    player2,
    board
};