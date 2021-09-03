var maxSumAfterPartitioning = function (arr, k) {
  let map = new Map();

  var solve = function (idx) {
    if (idx >= arr.length) {
      return 0;
    }

    if (map.has(idx)) {
      return map.get(idx);
    }

    let maxTillNow = 0;
    let maxSum = 0;
    for (let i = idx; i < idx + k && i < arr.length; i++) {
      maxTillNow = Math.max(maxTillNow, arr[i]);
      maxSum = Math.max(maxSum, maxTillNow * (i - idx + 1) + solve(i + 1));
    }

    map.set(idx, maxSum);
    return maxSum;
  };

  return solve(0);
};
