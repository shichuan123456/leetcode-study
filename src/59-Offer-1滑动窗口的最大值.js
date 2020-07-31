/* 
  给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
*/
const nums = [1,3,-1,-3,5,3,6,7], k = 3;
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) return nums;
  const res = [];
  for (let i = 0; i < nums.length - k + 1; ++i) {
      res.push(Math.max(...nums.slice(i, i + k)));
  }
  return res;
};

console.log(maxSlidingWindow(nums, k));




 