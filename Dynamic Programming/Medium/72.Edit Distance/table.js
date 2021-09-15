//O(m*n)    => m = word1.length  n = word2.length
var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill()
    .map((item) => Array(word2.length + 1).fill(-1));

  for (let i = 0; i < word1.length + 1; i++) {
    for (let j = 0; j < word2.length + 1; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[word1.length][word2.length];
};
