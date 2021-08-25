//O(k^n)      => say every time we are traversing k branches of recursive tree
//In binary recursive tree format, we have 2 branches, so O(2^n).
var jump = function (nums) {
  var solve = function (i) {
    if (i >= nums.length - 1) {
      return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i + 1; j <= i + nums[i]; j++) {
      min = Math.min(min, 1 + solve(j));
    }

    return min;
  };

  return solve(0);
};
