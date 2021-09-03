//Reference: https://www.youtube.com/watch?v=qpgqhp_9d1s
var canPartitionKSubsets = function (arr, k) {
  let totalSum = arr.reduce((sum, item) => {
    return sum + item;
  }, 0);

  if (totalSum % k !== 0) {
    return false;
  }
  let targetSum = Math.floor(totalSum / k);

  var canPartition = function (start, used, k, currentSum) {
    if (k === 1) {
      return true;
    }

    if (currentSum > targetSum) {
      return false;
    }

    if (currentSum === targetSum) {
      return canPartition(0, used, k - 1, 0);
    }

    for (let i = start; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        if (canPartition(i + 1, used, k, currentSum + arr[i])) {
          return true;
        }
        used[i] = false;
      }
    }
    return false;
  };

  return canPartition(0, Array(k).fill(false), k, 0);
};
