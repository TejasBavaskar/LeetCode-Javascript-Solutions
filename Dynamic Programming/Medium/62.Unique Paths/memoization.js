//O(m*n)
var uniquePaths = function (m, n) {
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(-1);
  }

  var solve = function (i, j) {
    if (i >= m || j >= n) {
      return 0;
    }

    if (i === m - 1 && j === n - 1) {
      return 1;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    dp[i][j] = solve(i + 1, j) + solve(i, j + 1);
    return dp[i][j];
  };

  return solve(0, 0);
};
