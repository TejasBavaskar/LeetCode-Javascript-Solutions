//O(m*n)
var minimumDeleteSum = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;
  let dp = Array(m + 1)
    .fill()
    .map((item) => Array(n + 1).fill(0));

  dp[0][0] = 0;
  for (let i = 1; i < n + 1; i++) {
    dp[0][i] = s2.charCodeAt(i - 1) + dp[0][i - 1];
  }

  for (let i = 1; i < m + 1; i++) {
    dp[i][0] = s1.charCodeAt(i - 1) + dp[i - 1][0];
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          s1.charCodeAt(i - 1) + dp[i - 1][j],
          s2.charCodeAt(j - 1) + dp[i][j - 1]
        );
      }
    }
  }

  return dp[m][n];
};
