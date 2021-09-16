//O(2^n)  => n = Math.min(s1.length, s2.length)
var minimumDeleteSum = function (s1, s2) {
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

    if (s1[i - 1] === s2[j - 1]) {
      return solve(i - 1, j - 1);
    } else {
      return Math.min(
        s1.charCodeAt(i - 1) + solve(i - 1, j),
        s2.charCodeAt(j - 1) + solve(i, j - 1)
      );
    }
  };

  return solve(s1.length, s2.length);
};
