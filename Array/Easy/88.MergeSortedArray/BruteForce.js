//O(m+n)
var merge = function(nums1, m, nums2, n) {
  let nums1copy = nums1.splice(0, m);
  let i = j = 0;
  for(let k=0; k<m+n; k++) {
      if(nums1copy[i] < nums2[j] || j >= n) {
          nums1[k] = nums1copy[i];
          i++;
      } else {
          nums1[k] = nums2[j];
          j++;
      }
  }
};