//log(n)
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let ans = Number.MAX_VALUE;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      let isBad = isBadVersion(middle);

      if (isBad) {
        ans = Math.min(ans, middle);
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return ans;
  };
};
