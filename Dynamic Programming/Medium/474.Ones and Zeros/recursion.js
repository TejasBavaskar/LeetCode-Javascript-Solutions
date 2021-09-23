//O(2^n)
//Time Limit Exceed
var findMaxForm = function (strs, m, n) {
  var solve = function (idx, numZeros, numOnes) {
    if (idx >= strs.length) {
      return 0;
    }

    let currentStr = strs[idx];
    let zero = 0;
    let one = 0;

    for (let k = 0; k < currentStr.length; k++) {
      if (currentStr[k] === "0") {
        zero++;
      } else {
        one++;
      }
    }

    let temp1 = 0;
    if (zero <= numZeros && one <= numOnes) {
      temp1 = 1 + solve(idx + 1, numZeros - zero, numOnes - one);
    }
    let temp2 = solve(idx + 1, numZeros, numOnes);
    return Math.max(temp1, temp2);
  };

  return solve(0, m, n);
};
