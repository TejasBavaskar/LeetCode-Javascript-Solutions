//O(n^2)
var lengthOfLIS = function (nums) {
  let dp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Array(nums.length + 1).fill(-1);
  }

  var solve = function (i, prev) {
    if (i >= nums.length) {
      return 0;
    }

    if (dp[i][prev + 1] !== -1) {
      return dp[i][prev + 1];
    }

    let tempAns = 0;
    if (prev === -1 || nums[i] > nums[prev]) {
      tempAns = Math.max(1 + solve(i + 1, i), solve(i + 1, prev));
    } else {
      tempAns = solve(i + 1, prev);
    }

    dp[i][prev + 1] = tempAns;
    return dp[i][prev + 1];
  };

  return solve(0, -1);
};
