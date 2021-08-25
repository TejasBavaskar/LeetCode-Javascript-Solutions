//O(k*n)
var jump = function (nums) {
  let dp = Array(nums.length + 1).fill(-1);

  var solve = function (i) {
    if (i >= nums.length - 1) {
      return 0;
    }

    if (dp[i] !== -1) {
      return dp[i];
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i + 1; j <= i + nums[i]; j++) {    //n
      min = Math.min(min, 1 + solve(j));            //k
    }

    dp[i] = min;
    return dp[i];
  };

  return solve(0);
};
