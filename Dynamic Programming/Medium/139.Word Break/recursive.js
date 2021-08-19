//O(2^n) => Time Limit Exceeded
var wordBreak = function (s, wordDict) {
  var solve = function (i) {
    if (i >= s.length) {
      return true;
    }

    let temp = "";
    for (let k = i; k < s.length; k++) {
      temp += s[k];
      if (wordDict.includes(temp)) {
        if (solve(k + 1)) {
          return true;
        }
      }
    }
    return false;
  };

  return solve(0);
};
