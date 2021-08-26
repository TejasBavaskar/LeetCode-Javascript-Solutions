//O(n)
//Reference: https://www.youtube.com/watch?v=9-TXIVEXX2w
var sumSubarrayMins = function (arr) {
  let leftStack = [];
  let leftCount = [];
  let rightStack = [];
  let rightCount = [];

  // getting number of element strictly larger
	// than arr[i] on Left.
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    while (leftStack.length !== 0) {
      let [leftVal, leftCnt] = leftStack.pop();
      if (leftVal > arr[i]) {
        count += leftCnt;
      } else {
        //If we found that if any left value is less than current arr[i]
        //that means current arr[i] can not be the min value in sub-array to add in final sum
        //so just break there only.
        leftStack.push([leftVal, leftCnt]);
        break;
      }
    }
    leftStack.push([arr[i], count]);
    leftCount[i] = count;     //Store left count for each index
  }

  // getting number of element larger/Equal
	// than arr[i] on the Right.
  for (let i = arr.length - 1; i >= 0; i--) {
    let count = 1;
    while (rightStack.length !== 0) {
      let [rightVal, rightCnt] = rightStack.pop();
      if (rightVal >= arr[i]) {
        count += rightCnt;
      } else {
        //If we found that if any right value is less than current arr[i]
        //that means current arr[i] can not be the min value in sub-array to add in final sum
        //so just break there only.
        rightStack.push([rightVal, rightCnt]);
        break;
      }
    }
    rightStack.push([arr[i], count]);
    rightCount[i] = count;   //Store right count for each index
  }

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans + arr[i] * leftCount[i] * rightCount[i];
  }

  return ans % (Math.pow(10, 9) + 7);
};
