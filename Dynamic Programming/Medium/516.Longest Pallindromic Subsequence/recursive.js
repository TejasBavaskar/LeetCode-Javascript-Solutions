//O(2^n)
//Time Limit Exceed
var longestPalindromeSubseq = function (s) {
  let s1 = s;
  let s2 = s.split("").reverse().join("");

  var lps = function (i, j) {
    if (i === 0 || j === 0) {
      return 0;
    }

    if (s1[i - 1] === s2[j - 1]) {
      return 1 + lps(i - 1, j - 1);
    } else {
      return Math.max(lps(i - 1, j), lps(i, j - 1));
    }
  };

  return lps(s1.length, s2.length);
};
