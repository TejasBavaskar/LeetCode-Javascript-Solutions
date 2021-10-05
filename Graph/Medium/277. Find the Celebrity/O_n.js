//O(n)
//Reference: https://leetcode.com/problems/find-the-celebrity/solution/#:~:text=Here%20is%20an%20animation%20of%20the%20algorithm.
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let start = 0;
    let end = 1;

    while (end < n) {
      if (knows(start, end)) {
        start = end;
        end++;
      } else {
        end++;
      }
    }

    //Now start may or may not be a celebrity

    for (let i = 0; i < n; i++) {
      if (start === i) {
        continue;
      }
      if (knows(start, i) || !knows(i, start)) {    //if start knows any other return -1
        return -1;                                  //every other n-1 should know start otherwise return -1
      }
    }
    return start;
  };
};
