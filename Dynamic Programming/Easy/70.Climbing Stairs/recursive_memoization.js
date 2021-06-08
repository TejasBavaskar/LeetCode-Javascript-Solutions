//O(n)
var climbStairs = function(n) {
  let dict = {};
  
  var climb = function(n) {
      if(n in dict) {
          return dict[n];
      }
      
      if(n <= 1) {
          return 1;
      }

      let result = climb(n-1) + climb(n-2);
      dict[n] = result;
      
      return result;
  }

  return climb(n);
};

//----------------- OR -------------------
//O(n)
var climbStairs = function(n) {
  let temp = [];
  temp[0] = 1;
  temp[1] = 1;
  
  let i = 2;
  while(i <= n) {
      temp[i] = temp[i-1] + temp[i-2];
      i++;
  }
  
  return temp[temp.length-1];
};