//O(max(m, n)) => m = s.length    n = t.length
var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];
  let index = 0;

  while (index < s.length || index < t.length) {
    if (s[index] !== undefined) {
      if (s[index] === "#") {
        stack1.pop();
      } else {
        stack1.push(s[index]);
      }
    }

    if (t[index] !== undefined) {
      if (t[index] === "#") {
        stack2.pop();
      } else {
        stack2.push(t[index]);
      }
    }

    index++;
  }

  return JSON.stringify(stack1) === JSON.stringify(stack2);
};
