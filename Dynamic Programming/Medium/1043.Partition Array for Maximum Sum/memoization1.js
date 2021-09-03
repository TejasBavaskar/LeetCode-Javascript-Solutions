//O(n^2)    ==> MCM Pattern
var maxSumAfterPartitioning = function (arr, x) {
  let map = new Map();

  var solve = function (i, j) {
    if (i > j) {
      return 0;
    }

    if (j - i + 1 <= x) {
      let tempMax = arr[i];
      for (let idx = i; idx <= j; idx++) {
        tempMax = Math.max(arr[idx], tempMax);
      }

      return tempMax * (j - i + 1);
    }

    if (map.has(i)) {
      return map.get(i);
    }
    let max = 0;
    for (let k = i; k < j; k++) {     //n
      let tempAns = solve(i, k) + solve(k + 1, j);
      max = Math.max(max, tempAns);
    }

    map.set(i, max);

    return max;
  };

  return solve(0, arr.length - 1);
};
