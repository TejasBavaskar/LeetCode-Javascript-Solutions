//O(n)    => Greedy Approach
//Reference: https://www.youtube.com/watch?v=Yan0cv2cLy8
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};
