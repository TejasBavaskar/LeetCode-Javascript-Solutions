//O(m*n)
var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill()
    .map((item) => Array(word2.length + 1).fill(-1));

  var solve = function (i, j) {
    if (i === 0) {
      return j;
    }

    if (j === 0) {
      return i;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (word1[i - 1] === word2[j - 1]) {
      dp[i][j] = solve(i - 1, j - 1);
    } else {
      let insertOp = 1 + solve(i, j - 1);
      let deleteOp = 1 + solve(i - 1, j);
      let replaceOp = 1 + solve(i - 1, j - 1);

      dp[i][j] = Math.min(insertOp, deleteOp, replaceOp);
    }
    return dp[i][j];
  };

  return solve(word1.length, word2.length);
};
