//O(n^2)      => Sometimes last test case may get Time Limit Exceed Error
var canJump = function (nums) {
  let jumpLimit = 0;
  let dp = Array(nums.length).fill(-1);

  var solve = function (i) {
    if (i >= nums.length - 1) {
      return true;
    }
    if (dp[i] !== -1) {
      return dp[i];
    }
    if (nums[i] === 0) {
      return false;
    }

    jumpLimit = Math.max(jumpLimit, i + nums[i]);
    for (let k = i + 1; k <= jumpLimit; k++) {
      if (solve(k)) {
        dp[i] = true;
        return true;
      }
    }

    dp[i] = false;
    return dp[i];
  };

  if (nums.length === 1) {
    return true;
  }
  if (nums[0] === 0) {
    return false;
  }

  return solve(0);
};
