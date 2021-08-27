//O(n*m)    => n = coins.length     m = amount
var change = function (amount, coins) {
  let dp = Array(coins.length + 1);
  for (let i = 0; i < coins.length + 1; i++) {
    dp[i] = Array(amount + 1).fill(0);
  }

  for (let i = 0; i < amount + 1; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i < coins.length + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < coins.length + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[coins.length][amount];
};
