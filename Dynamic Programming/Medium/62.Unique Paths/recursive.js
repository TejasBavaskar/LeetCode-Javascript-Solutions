//O(2^n)    ==>Time Limit Exceed
var uniquePaths = function (m, n) {
  var solve = function (i, j) {
    if (i >= m || j >= n) {
      return 0;
    }

    if (i === m - 1 && j === n - 1) {
      return 1;
    }

    return solve(i + 1, j) + solve(i, j + 1);
  };

  return solve(0, 0);
};
