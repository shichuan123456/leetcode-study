/* 
  输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
  要求时间复杂度为O(n)。
*/

/* var maxSubArray = function(nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
    return max
  }; */

/* var maxSubArray = function(nums) {
    for(var i = 1; i < nums.length; i++){
        if(nums[i - 1] > 0){
            nums[i] += nums[i - 1];
        }
    }
    return Math.max(...nums)
}; */

// reduce
/* var maxSubArray = function(nums) {
  let max = -Infinity;
  nums.reduce((t, c, i) => {
    if(t > 0) {
      t += c;
    }else{
      t = c;
    }
    max = max > t ? max : t;
    return t;
  })
  return max;
}; */

/* var maxSubArray = function(nums) {
  let max = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(nums[i-1] > 0) {
      nums[i] = nums[i-1] + nums[i];
    }
    max = max > nums[i] ? max : nums[i];
  }
  return max;
}  */

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5]));