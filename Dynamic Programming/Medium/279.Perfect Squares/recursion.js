//O(n^sqrt(n))
//Time Limit Exceed
var numSquares = function (n) {
  var solve = function (n) {
    if (n === 0) {
      return 0;
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= n; i++) {
      let temp = 1 + solve(n - i * i);
      ans = Math.min(ans, temp);
    }
    return ans;
  };

  return solve(n);
};
