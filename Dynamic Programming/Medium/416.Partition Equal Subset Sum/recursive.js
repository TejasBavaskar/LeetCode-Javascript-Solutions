//O(2^n)
var canPartition = function (nums) {
  let total = nums.reduce((sum, item) => {
    return sum + item;
  }, 0);

  if (total % 2 !== 0) {
    return false;
  }

  let sum = Math.floor(total / 2);

  var solve = function (n, sum) {
    if (sum === 0 && n === 0) {
      return true;
    }
    if (n === 0 && sum !== 0) {
      return false;
    }

    if (nums[n - 1] <= sum) {
      return solve(n - 1, sum - nums[n - 1]) || solve(n - 1, sum);
    } else {
      return solve(n - 1, sum);
    }
  };

  return solve(nums.length, sum);
};
