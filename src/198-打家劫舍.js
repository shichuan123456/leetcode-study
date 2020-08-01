var rob = function(nums) {
  // dp[i]表示[0,i]小偷所能偷得的最大值。
  let dp = [], len = nums.length;
  dp[0] = 0;
  dp[1] = nums[0];
  for(let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i-1], nums[i-1] + dp[i-2]);
  }
  return dp[len];
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([1]));
console.log(rob([]));
console.log(rob([3,7]));
