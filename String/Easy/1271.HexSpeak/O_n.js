//O(m)
var toHexspeak = function(num) {
  let tempNum = parseInt(num);
  let quot = 0;
  let rem = 0;
  let result = [];
  
  let dict = {
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F',
      1: 'I',
      0: 'O',
  };
  
  while(tempNum > 0) {
      quot = Math.floor(tempNum / 16);
      rem = tempNum % 16;
      if(!(rem in dict)) {
          return 'ERROR';
      }
      
      result.push(dict[rem]);
      tempNum = quot;
      
  }
  
  return result.reverse().join('');
};