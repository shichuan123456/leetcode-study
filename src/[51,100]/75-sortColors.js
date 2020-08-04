const swap = require("../test/swap_array");

// const sortColors = (nums) => {
//   const colors = new Array(3).fill(0);
//   for(let i = 0, len = nums.length; i < len; i++) {
//     colors[nums[i]]++;
//   }
//   let index = 0;
//   for(let j = 0, len = colors.length; j < len; j++) {
//     for(let k = 0; k < colors[j]; k++) {
//       nums[index++] = j;
//     }
//   }

//   return nums;
// }

// 利用三路快排的方式
const sortColors1 = (nums) => {
  // nums[0...zeor] == 0, nums[two,...n-1] == 2
  let zero = -1, two = nums.length;
  for(let i = 0; i < two; ) {
    if(nums[i] === 1) {
      i++;
    }else if(nums[i] === 2){
      two--;
      swap(nums, i, two);
    }else {
      zero++;
      swap(nums, zero, i);
      i++;
    }
  }
  return nums;
}

const sortColors = (nums) => {
  let zero = -1, two = nums.length;
  // i < two  [two, len]已经是排好序都是2的元素
  for(let i = 0; i < two; ) {  
    if(nums[i] === 1){
      i++;
    }else if(nums[i] === 2) {
      swap(nums, --two, i);
    }else{
      swap(nums, ++zero, i++);
    }
  }
  return nums;
}

console.log(sortColors([1,2,1,2,1,2,0,0,0,1,2,0,2]));
console.log(sortColors1([1,2,1,2,1,2,0,0,0,1,2,0,2]));