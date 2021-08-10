//O(n^2)
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {   //n
    let low = i + 1;
    let high = nums.length - 1;
    let sum = 0;

    while (low < high) {    //n
      sum = nums[low] + nums[high] + nums[i];
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low] === nums[low + 1]) {
          low++;
        }
        low++;
        while (nums[high] === nums[high - 1]) {
          high--;
        }
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        high--;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
};
