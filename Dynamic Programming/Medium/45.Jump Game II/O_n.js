//O(n)
//Reference: https://www.youtube.com/watch?v=muDPTDrpS28
var jump = function (nums) {
  let reachable = 0;
  let currentJumpEnd = 0;
  let jumpCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {       //n
    reachable = Math.max(reachable, i + nums[i]);
    if (i === currentJumpEnd) {
      jumpCount++;
      currentJumpEnd = reachable;
    }
  }
  return jumpCount;
};
