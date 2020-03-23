const { Given, Then, When } = require('cucumber');
const moves = require('../tic_tac_toe');
let players = {
  1 : moves.player1,
  2 : moves.player2
}
let str = [];
let str2 = [];

Given('поле', () => {
  moves.makeBoard();
});
When('игрок 1 выбирает {string}', (str) => {
  moves.setPlayer(str);
});
Then('игрок 2 становится {string}', (str) => {
  moves.player2 === str;
});
When('игрок {int} ходит в клетку {int}', (int, int2) => {
  moves.makePosition(int, players[int2]);
});
Then('поле становится {string}', (string) => {
  str = [];
    for(let str of string){
      if(str !== '|') str += str;
    }
  str2 = [];
    for( let i in moves.board){
      str2 += moves.board[i];
    }

  str == str2;
});
Given('поле {string}', (string) => {
  str = [];
    for(let str of string){
      if(str !== '|') str += str;
    }
    for(let i in moves.board){
      moves.board[i] = str[i];
    }
});
Then('возвращается ошибка', () => {       
    return "Ошибка";
});
Then('победил игрок {int}', (int) => {
    moves.win();
});
Then('ничья', () => {
  str2 = [];
  for( let i in moves.board){
    str2 += moves.board[i];
  }
  str2.join('').search(/\d+/)==-1;
});
