//O(m+n)
var intersection = function (nums1, nums2) {
  let dict = {};
  let mySet = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (!(nums1[i] in dict)) {
      dict[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in dict) {
      mySet.add(nums2[i]);
    }
  }

  return Array.from(mySet);
};
