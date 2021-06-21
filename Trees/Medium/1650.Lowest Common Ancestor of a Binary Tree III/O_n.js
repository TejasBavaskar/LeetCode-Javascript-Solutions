//O(n)  => in case of skew tree
var lowestCommonAncestor = function (p, q) {
  let mySet = new Set();

  let temp = p;

  while (temp) {
    mySet.add(temp);
    temp = temp.parent;
  }

  temp = q;

  while (!mySet.has(temp)) {
    temp = temp.parent;
  }

  return temp;
};
