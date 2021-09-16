//O(n^2)
var longestPalindromeSubseq = function (s) {
  let s1 = s;
  let s2 = s.split("").reverse().join("");
  let len = s1.length;
  let dp = Array(len + 1)
    .fill()
    .map((item) => Array(len + 1).fill(0));

  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < len + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len][len];
};
