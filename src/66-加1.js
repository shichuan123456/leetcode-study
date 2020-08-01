/* 
  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123。
*/

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] !== 9) {
      digits[i]++;
      return digits;
    }else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};

console.log(plusOne([1,2,9]));