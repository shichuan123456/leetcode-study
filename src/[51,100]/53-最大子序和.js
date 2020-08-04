/* 给定一个数组，找到一个具有最大和的连续子数组，子数组最少包含一个元素，返回其最大和 */

// const maxSubArray = (nums) => {
//   let res = nums[0];
//   let sum = nums[0];
//   for(let i = 1; i < nums.length; i++) {
//     if(sum > 0){
//       sum += nums[i];
//     }else{
//       sum = nums[i]
//     }
//     res = Math.max(res, sum);
//   }
//   return res;
// }

console.log(maxSubArray([-2,1,4,5,-8]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));