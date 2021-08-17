//O(n + W)    => W = max(nums)
//For concept: https://www.youtube.com/watch?v=SuM12LERW_M
//For code: https://www.youtube.com/watch?v=YyHmAEQ6y6Q
var deleteAndEarn = function (nums) {
  let max = nums.reduce((max, item) => {
    return Math.max(max, item);
  }, Number.MIN_VALUE);

  let dp = Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {     //n
    dp[nums[i]] += nums[i];
  }

  dp[dp.length - 2] = Math.max(dp[dp.length - 2], dp[dp.length - 1]);
  for (let i = dp.length - 3; i >= 0; i--) {  //max(nums[i])
    dp[i] = Math.max(dp[i] + dp[i + 2], dp[i + 1]);
  }

  return dp[0];
};
