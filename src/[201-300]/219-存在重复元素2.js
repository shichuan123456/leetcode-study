/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
  const set = new Set(); // 最多 k + 1个元素
  for(let i = 0; i < nums.length; i++) {
      if(set.has(nums[i])) {
          return true;
      }
      set.add(nums[i]);     
      if(set.size === k + 1) {   // 通过size来限制范围
        //  r - l + 1 = k + 1  =====> l = r - k
        set.delete(nums[i - k]);
      }
     
  }
  return false;
};

var containsNearbyDuplicate1 = function(nums, k) {
  const set = new Set(), len = nums.length;
  let l = 0, r = -1;
  while(r + 1 < len && l < len) {
    if(set.has(nums[++r])) {
      return true;
    }
    set.add(nums[r]);
    if( r - l == k ) {
      set.delete(nums[l++])
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 2));
console.log(containsNearbyDuplicate1([1,2,3,1], 2));