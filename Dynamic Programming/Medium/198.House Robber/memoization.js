//O(n)
var rob = function (nums) {
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let profit = 0;
  let dp = Array(nums.length).fill(-1);

  var solve = function (i) {
    if (i >= nums.length) {
      return 0;
    }

    if (dp[i] !== -1) {
      return dp[i];
    }

    let tempAns = Math.max(nums[i] + solve(i + 2), solve(i + 1));
    profit = Math.max(profit, tempAns);

    dp[i] = tempAns;
    return dp[i];
  };

  solve(0);
  return profit;
};
