const minSubArrayLen = (min, nums) => {
  let l = 0, r = -1, len = nums.length, sum = 0;    // [l, r] minSub左闭右闭，所以初始化没有任何数据
  let res = len + 1; // 这个值是长度加1，不可能取到
  while(l < len) {
    if( r + 1 < len && sum < min) {
      sum += nums[++r];
    }else{
      sum -= nums[l++];
    }
    if(sum >= min) {
      res = Math.min(res, r - l + 1);
    }
  }
  if(res === len + 1) {
    return 0;
  }
  return res;
}


console.log(minSubArrayLen(7, [2,3,1,2,2,3]));


