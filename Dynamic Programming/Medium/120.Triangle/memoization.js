//O(n^2)
var minimumTotal = function (triangle) {
  let map = new Map();

  var solve = function (i, j) {
    if (i >= triangle.length) {
      return 0;
    }

    let key = i + " " + j;
    if (map.has(key)) {
      return map.get(key);
    }

    let ans = triangle[i][j] + Math.min(solve(i + 1, j), solve(i + 1, j + 1));
    map.set(key, ans);
    return ans;
  };

  return solve(0, 0);
};
