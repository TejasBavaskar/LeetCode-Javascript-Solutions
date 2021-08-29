//O(2^n)    =>Time Limit Exceed
var lengthOfLIS = function (nums) {
  var solve = function (i, prev) {
    if (i >= nums.length) {
      return 0;
    }

    let tempAns = 0;
    if (prev === -1 || nums[i] > nums[prev]) {
      tempAns = Math.max(1 + solve(i + 1, i), solve(i + 1, prev));
    } else {
      tempAns = solve(i + 1, prev);
    }

    return tempAns;
  };

  return solve(0, -1);
};
