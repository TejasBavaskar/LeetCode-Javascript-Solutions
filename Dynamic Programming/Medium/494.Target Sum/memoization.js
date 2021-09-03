//O(n*sum)
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

  let map = new Map();
  var solve = function (n, sum) {
    if (n === 0) {
      return sum === 0 ? 1 : 0;
    }
    let key = n + " " + sum;
    if (map.has(key)) {
      console.log("Returning");
      return map.get(key);
    }

    let ans = 0;
    if (nums[n - 1] <= sum) {
      ans = solve(n - 1, sum - nums[n - 1]) + solve(n - 1, sum);
    } else {
      ans = solve(n - 1, sum);
    }

    map.set(key, ans);
    return ans;
  };

  return solve(nums.length, sum);
};
