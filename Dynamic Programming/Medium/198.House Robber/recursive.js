//O(2^n)
var rob = function (nums) {
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let profit = 0;
  var solve = function (i) {
    if (i >= nums.length) {
      return 0;
    }

    let tempAns = Math.max(nums[i] + solve(i + 2), solve(i + 1));
    profit = Math.max(profit, tempAns);

    return tempAns;
  };

  solve(0);
  return profit;
};
