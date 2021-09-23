//O(n*sqrt(n))
var numSquares = function (n) {
  let dp = Array(n + 1).fill(-1);

  var solve = function (n) {
    if (n === 0) {
      return 0;
    }

    if (dp[n] !== -1) {
      return dp[n];
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= n; i++) {
      let temp = 1 + solve(n - i * i);
      ans = Math.min(ans, temp);
    }
    dp[n] = ans;
    return ans;
  };

  return solve(n);
};
