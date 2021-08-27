//Time Limit Exceed
//O(2^n)
var change = function(amount, coins) {
  var solve = function(n, amount) {
      if(amount === 0) {
          return 1;
      }
      if(n === 0) {
          return 0;
      }
      
      if(coins[n-1] <= amount) {
          return solve(n, amount - coins[n-1]) + solve(n-1, amount);
      } else {
          return solve(n-1, amount);
      }
  }
  
  let maxWays = solve(coins.length, amount);
  return maxWays;
}