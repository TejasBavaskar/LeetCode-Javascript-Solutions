//O(n*m)    => n = coins.length     m = amount
var change = function(amount, coins) {
  let dp = Array(coins.length+1);
  for(let i=0; i<coins.length+1; i++) {
      dp[i] = Array(amount+1).fill(-1);
  }
  
  var solve = function(n, amount) {
      if(amount === 0) {
          return 1;
      }
      if(n === 0) {
          return 0;
      }
      
      if(dp[n][amount] !== -1) {
          return dp[n][amount];
      }
      
      if(coins[n-1] <= amount) {
          dp[n][amount] =  solve(n, amount - coins[n-1]) + solve(n-1, amount);
      } else {
          dp[n][amount] = solve(n-1, amount);
      }
      return dp[n][amount];
  }
  
  let maxWays = solve(coins.length, amount);
  return maxWays;
}