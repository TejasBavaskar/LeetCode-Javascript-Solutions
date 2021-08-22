//O(2^n)    => Time Limit Exceeded
var integerBreak = function (n) {
  var solve = function (n) {
    if (n === 1) {
      return 1;
    }
    let ans = 1 * (n - 1);

    for (let i = 1; i < n; i++) {
      let tempAns = i * Math.max(solve(n - i), n - i);
      ans = Math.max(ans, tempAns);
    }
    return ans;
  };

  return solve(n);
};
