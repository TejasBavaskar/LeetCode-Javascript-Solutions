//O(n^3)  => Time limit exceed
var threeSum = function (nums) {
  let result = [];
  let zeroFlag = false;
  for (let i = 0; i < nums.length - 2; i++) { //n
    let x = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) { //n
      let y = nums[j];
      for (let k = j + 1; k < nums.length; k++) { //n
        let z = nums[k];
        let sum = x + y + z;
        if (sum === 0) {
          if (x === 0 && y === 0 && z === 0) {
            if (!zeroFlag) {
              result.push([x, y, z]);
              zeroFlag = true;
            }
          } else {
            let flag = result.some((item) => {
              return item.includes(x) && item.includes(y) && item.includes(z);
            });
            if (!flag || (x === y && y === z)) {
              result.push([x, y, z]);
            }
          }
        }
      }
    }
  }

  return result;
};
