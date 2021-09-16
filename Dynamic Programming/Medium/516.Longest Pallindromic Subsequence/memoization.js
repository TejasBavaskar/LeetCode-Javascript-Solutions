//O(n^2)      => s1.length = s2.length
var longestPalindromeSubseq = function (s) {
  let s1 = s;
  let s2 = s.split("").reverse().join("");
  let len = s1.length;
  let dp = Array(len + 1)
    .fill()
    .map((item) => Array(len + 1).fill(-1));

  var lps = function (i, j) {
    if (i === 0 || j === 0) {
      return 0;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = 1 + lps(i - 1, j - 1);
    } else {
      dp[i][j] = Math.max(lps(i - 1, j), lps(i, j - 1));
    }
    return dp[i][j];
  };

  return lps(s1.length, s2.length);
};
