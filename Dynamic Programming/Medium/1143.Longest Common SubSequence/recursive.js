//O(2^n)  => n = Max(m, n)
var longestCommonSubsequence = function (text1, text2) {
  var solve = function (m, n) {
    if (m === 0 || n === 0) {
      return 0;
    }

    if (text1[m - 1] === text2[n - 1]) {
      return 1 + solve(m - 1, n - 1);
    } else {
      return Math.max(solve(m - 1, n), solve(m, n - 1));
    }
  };

  return solve(text1.length, text2.length);
};
