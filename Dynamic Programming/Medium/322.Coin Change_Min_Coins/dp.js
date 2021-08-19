//O(n*amount)     => n = coins.length
var coinChange = function (coins, amount) {
  let dp = Array(coins.length + 1);
  for (let i = 0; i < coins.length + 1; i++) {
    dp[i] = Array(amount + 1).fill(0);
  }

  for (let i = 0; i < amount + 1; i++) {
    dp[0][i] = Number.MAX_SAFE_INTEGER;   //if coins = 0 and we want to have sum = xyz then we need inifinite coins
  }
  for (let i = 0; i < coins.length + 1; i++) {
    dp[i][0] = 0;     //We have coins but we want sum = 0, so 0 coins are required
  }

  for (let i = 1; i < coins.length + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(1 + dp[i][j - coins[i - 1]], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[coins.length][amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[coins.length][amount];
};
