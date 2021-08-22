//O(n^2)    =>Memoization
var integerBreak = function (n) {
  let dp = Array(n+1);

  var solve = function (n) {
    if (n === 1) {
      return 1;
    }

    if(dp[n]) {
      return dp[n];
    }

    let ans = 1 * (n - 1);
    for (let i = 1; i < n; i++) {     //n
      let tempAns = i * Math.max(solve(n - i), n - i);      //n
      ans = Math.max(ans, tempAns);
    }
    dp[n] = ans;
    return dp[n];
  };

  return solve(n);
};
