//O(n)
var isValidSerialization = function (preorder) {
  let slots = 1;
  preorder = preorder.split(",");
  for (let i = 0; i < preorder.length; i++) {
    slots--;
    if (slots < 0) {
      return false;
    }

    if (preorder[i] !== "#") {
      slots += 2;
    }
  }

  return slots === 0;
};
