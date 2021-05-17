//O(n^2)
var sortString = function(s) {
  s = s.split('').sort().join('');  //nlogn
  let result = [];
  
  while(s.length) { //O(n)
      let i = 0;
      while(s[i]) { //O(n) * O(n)
          if(s[i] !== s[i+1]) {
              result.push(s[i]);
              let newArr = s.split('');
              newArr.splice(i, 1, '');
              s = newArr.join('');
          } else {
            i++;
          }

      }
      
      i = s.length-1;
      while(s[i]) {
          if(s[i] !== s[i-1]) {
              result.push(s[i]);
              let newArr = s.split('');
              newArr.splice(i, 1, '');
              s = newArr.join('');
          }
          i--;
      
      }
  }
  
  return result.join('');
};