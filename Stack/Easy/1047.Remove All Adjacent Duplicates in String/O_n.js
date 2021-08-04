//O(n)
var removeDuplicates = function (s) {
  let stack = [];
  let index = 0;
  while (index < s.length) {
    if (stack.length === 0) {
      stack.push(s[index]);
    } else if (s[index] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[index]);
    }
    index++;
  }

  return stack.join("");
};
