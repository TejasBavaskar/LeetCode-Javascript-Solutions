//O(m+n)
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (let i = 0; i < nums2.length; i++) {  //m
    if (stack.length === 0) {
      stack.push(nums2[i]);
    } else {
      while (nums2[i] > stack[stack.length - 1]) {
        let x = stack.pop();
        map.set(x, nums2[i]);
      }
      stack.push(nums2[i]);
    }
  }

  for (let i = 0; i < stack.length; i++) {  //this will always be  < nums1 or nums2
    map.set(stack[i], -1);
  }

  let result = [];
  for (let i = 0; i < nums1.length; i++) {  //n
    result.push(map.get(nums1[i]));
  }

  return result;
};
