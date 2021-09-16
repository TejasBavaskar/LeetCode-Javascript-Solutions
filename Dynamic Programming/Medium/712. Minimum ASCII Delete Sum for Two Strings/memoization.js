//O(m*n)  => m = s1.length      n = s2.length
var minimumDeleteSum = function (s1, s2) {
  let dp = Array(s1.length + 1)
    .fill()
    .map((item) => Array(s2.length + 1).fill(-1));

  var solve = function (i, j) {
    if (i === 0) {
      let sum = 0;
      for (let k = 0; k < j; k++) {
        sum += s2.charCodeAt(k);
      }
      return sum;
    }

    if (j === 0) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += s1.charCodeAt(k);
      }
      return sum;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = solve(i - 1, j - 1);
    } else {
      dp[i][j] = Math.min(
        s1.charCodeAt(i - 1) + solve(i - 1, j),
        s2.charCodeAt(j - 1) + solve(i, j - 1)
      );
    }

    return dp[i][j];
  };

  return solve(s1.length, s2.length);
};
