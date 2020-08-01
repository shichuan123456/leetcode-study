

var containsDuplicate = function(nums) {
  return nums.length !== new Set(nums).size;
}

var containsDuplicate1 = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1,2,3,4,2]));
console.log(containsDuplicate1([1,2,3,4,2]));