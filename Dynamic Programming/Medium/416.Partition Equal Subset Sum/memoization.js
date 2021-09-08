//O(n*sum)
var canPartition = function (nums) {
  let total = nums.reduce((sum, item) => {
    return sum + item;
  }, 0);

  if (total % 2 !== 0) {
    return false;
  }

  let sum = Math.floor(total / 2);

  let dp = Array(nums.length + 1);
  for (let i = 0; i < nums.length + 1; i++) {
    dp[i] = Array(sum + 1).fill(-1);
  }

  var solve = function (n, sum) {
    if (sum === 0 && n === 0) {
      return true;
    }
    if (n === 0 && sum !== 0) {
      return false;
    }

    if (dp[n][sum] !== -1) {
      return dp[n][sum];
    }

    if (nums[n - 1] <= sum) {
      dp[n][sum] = solve(n - 1, sum - nums[n - 1]) || solve(n - 1, sum);
    } else {
      dp[n][sum] = solve(n - 1, sum);
    }
    return dp[n][sum];
  };

  return solve(nums.length, sum);
};
