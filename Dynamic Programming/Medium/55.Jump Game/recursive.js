//O(2^n)    => Time Limit Exceed
var canJump = function (nums) {
  let jumpLimit = 0;
  var solve = function (i) {
    if (i >= nums.length - 1) {
      return true;
    }

    jumpLimit = Math.max(jumpLimit, i + nums[i]);
    for (let k = i + 1; k <= jumpLimit; k++) {
      if (solve(k)) {
        return true;
      }
    }

    return false;
  };

  if (nums.length === 1) {
    return true;
  }
  if (nums[0] === 0) {
    return false;
  }

  return solve(0);
};
