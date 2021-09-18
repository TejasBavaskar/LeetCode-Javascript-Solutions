//O(2^n)
//Time Limit Exceeded
var minimumTotal = function (triangle) {
  var solve = function (i, j) {
    if (i >= triangle.length) {
      return 0;
    }

    return triangle[i][j] + Math.min(solve(i + 1, j), solve(i + 1, j + 1));
  };

  return solve(0, 0);
};
