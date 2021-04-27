//O(n)
var tictactoe = function(moves) {
  let board = [[],[],[]];
  let playerA = true;
  for(let i=0; i<moves.length; i++) {
      let row = moves[i][0];
      let col = moves[i][1];
      
      if(playerA) {
          board[row][col] = 'X';
          playerA = false;
      } else {
          board[row][col] = 'O';
          playerA = true;
      }
      
      //diagonal check
      if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X' ||
         board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
          return 'A';
      } else if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O' ||
         board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
          return 'B';
      }
      
      //row check
      if(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X' ||
         board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X' ||
         board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
          return 'A';
      } else if(board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O' ||
         board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O' ||
         board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
          return 'B';
      }
      
      //cloumn check
      if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X' ||
         board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X' ||
         board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
          return 'A';
      } else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O' ||
         board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O' ||
         board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
          return 'B';
      }
      
      
  }
  if( moves.length < 9)
      return 'Pending';
  else
      return 'Draw';
};