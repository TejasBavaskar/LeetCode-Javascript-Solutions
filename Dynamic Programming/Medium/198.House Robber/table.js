//O(n)
var rob = function (nums) {
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let n = nums.length;
  let dp = Array(nums.length + 1).fill(0);
  dp[n] = 0;
  dp[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
  }

  return dp[0];
};
