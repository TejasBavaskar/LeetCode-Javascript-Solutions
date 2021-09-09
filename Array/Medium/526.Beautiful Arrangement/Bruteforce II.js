//O(k)    => k = number of valid permutations
var countArrangement = function (n) {
  let nums = Array(n)
    .fill()
    .map((item, idx) => idx + 1);
  let count = 0;

  var swap = function (idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  };

  var solve = function (i) {
    if (i === nums.length) {
      count++;
    }

    for (let k = i; k < nums.length; k++) {
      swap(i, k);
      if (nums[i] % (i + 1) === 0 || (i + 1) % nums[i] === 0) {
        solve(i + 1);
      }
      swap(i, k);
    }
  };

  solve(0);
  return count;
};
