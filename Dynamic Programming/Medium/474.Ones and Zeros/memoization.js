//O(l*m*n)
var findMaxForm = function (strs, m, n) {
  let map = new Map();

  var solve = function (idx, numZeros, numOnes) {
    if (idx >= strs.length) {
      return 0;
    }

    let key = idx + " " + numZeros + " " + numOnes;
    if (map.has(key)) {
      return map.get(key);
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
    let ans = Math.max(temp1, temp2);

    map.set(key, ans);
    return ans;
  };

  return solve(0, m, n);
};
