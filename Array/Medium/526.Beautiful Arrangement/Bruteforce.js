//O(n!)   => Time Limit Exceed
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
    if (i === nums.length - 1) {
      let flag = false;
      for (let k = 0; k < nums.length; k++) {
        if (nums[k] % (k + 1) !== 0 && (k + 1) % nums[k] !== 0) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        count++;
      }
    }

    for (let k = i; k < nums.length; k++) {
      swap(i, k);
      solve(i + 1);
      swap(i, k);
    }
  };

  solve(0);
  return count;
};
