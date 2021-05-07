//O(n)
var judgeCircle = function(moves) {
  let dict = {};
  let [up,down,left,right] = [0,0,0,0];
  
  for(let i=0; i<moves.length; i++) {
      switch(moves[i]) {
          case 'U':
              up++;
              break;
          case 'D':
              down++;
              break;
          case 'L':
              left++;
              break;
          case 'R':
              right++;
              break;
      }
  }

  if(up === down && left === right) {
      return true;
  }
  
  return false;
};