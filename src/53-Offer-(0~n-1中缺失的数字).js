/* 
  一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
  在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
*/

var missingNumber = function(nums) {
  const n = nums.length + 1;
  for(let i = 0; i < n; i++) {
    if(nums[i] !== i) {
      return i;
    }
  }
};

console.log(missingNumber([0,1,2,3,5]))