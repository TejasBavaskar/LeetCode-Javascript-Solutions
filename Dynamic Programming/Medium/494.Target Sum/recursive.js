Object(2^n)
var findTargetSumWays = function (nums, target) {
  let totalSum = nums.reduce((sum, item) => {
    return sum + item;
  }, 0);

  if (target > totalSum) {
    return 0;
  }

  if ((target + totalSum) % 2 !== 0) {
    return 0;
  }

  let sum = Math.floor((target + totalSum) / 2);

  var solve = function (n, sum) {
    if (n === 0) {
      return sum === 0 ? 1 : 0;
    }

    if (nums[n - 1] <= sum) {
      return solve(n - 1, sum - nums[n - 1]) + solve(n - 1, sum);
    } else {
      return solve(n - 1, sum);
    }
  };

  return solve(nums.length, sum);
};
