//O(m*n)
var longestCommonSubsequence = function (text1, text2) {
  let dp = Array(text1.length + 1)
    .fill()
    .map((item) => Array(text2.length + 1).fill(-1));

  var solve = function (m, n) {
    if (m === 0 || n === 0) {
      return 0;
    }

    if (dp[m][n] !== -1) {
      return dp[m][n];
    }

    if (text1[m - 1] === text2[n - 1]) {
      dp[m][n] = 1 + solve(m - 1, n - 1);
    } else {
      dp[m][n] = Math.max(solve(m - 1, n), solve(m, n - 1));
    }
    return dp[m][n];
  };

  return solve(text1.length, text2.length);
};
