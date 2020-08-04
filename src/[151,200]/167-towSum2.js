/* 
  1、暴力解法。
  2、二分搜索。
  3、指针碰撞。
*/

const twoSum = (nums, target) => {
  let l = 0, r = nums.length - 1;
  while(l < r) {
    if(nums[l] + nums[r] == target) {
      return [l+1, r+1]
    }else if(nums[l] + nums[r] < target) {
      l++;
    }else{
      r--;
    }
  }
  return [];
}

console.log(twoSum([1,2,3,4,5,6],8));
console.log(twoSum([1,2],8));