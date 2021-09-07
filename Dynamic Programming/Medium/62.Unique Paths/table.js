//O(m*n)
var uniquePaths = function (m, n) {
  let dp = Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === 1 && j === 1) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m][n];
};
