//o(m*n)
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;

  let dp = Array(m + 1)
    .fill()
    .map((item) => Array(n + 1).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = str1.length;
  let j = str2.length;
  let result = "";

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result += str1[i - 1];
      i--;
      j--;
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        result += str1[i - 1];
        i--;
      } else {
        result += str2[j - 1];
        j--;
      }
    }
  }

  while (i > 0) {
    result += str1[i - 1];
    i--;
  }
  while (j > 0) {
    result += str2[j - 1];
    j--;
  }

  result = result.split("").reverse().join("");
  return result;
};
