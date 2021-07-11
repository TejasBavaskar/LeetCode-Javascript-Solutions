//O(n)
var diameter = function (root) {
  let diameter = 0;

  var findDiameter = function (root) {
    let currentSum = [];
    let childList = root.children;

    if (childList.length === 0) {
      return 1;
    }

    for (let i = 0; i < childList.length; i++) {
      currentSum.push(findDiameter(childList[i]));
    }

    let max1 = Math.max(...currentSum);
    currentSum.splice(currentSum.indexOf(max1), 1);
    let max2 = Math.max(...currentSum);
    max2 = max2 === -Infinity ? 0 : max2;

    diameter = Math.max(diameter, max1 + max2);
    return 1 + Math.max(max1);
  };
  findDiameter(root);
  return diameter;
};
