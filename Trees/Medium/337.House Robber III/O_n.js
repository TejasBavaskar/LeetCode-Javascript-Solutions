//O(n)
var rob = function (root) {
  let max = 0;
  var traverse = function (root) {
    if (!root) {
      return [0, 0];
    }

    let [l_withRob, l_withouthRob] = traverse(root.left);
    let [r_withRob, r_withouthRob] = traverse(root.right);

    let total_withRob = root.val + l_withouthRob + r_withouthRob;
    let total_withoutRob =
      Math.max(l_withRob, l_withouthRob) + Math.max(r_withRob, r_withouthRob);

    max = Math.max(max, Math.max(total_withRob, total_withoutRob));
    return [total_withRob, total_withoutRob];
  };

  traverse(root);
  return max;
};
