/* 
  ^: 
     1、a^b^c = a^c^b;
     2、0^n = n;
     3、n^n = 0;
*/

var singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  let i = 0, j = i + 1;
  while(j < nums.length){
    if(nums[i] !== nums[j]) {
      return nums[i];
    }else{
      i = j + 1;
      j = i + 1;
    }
  }
  if(i == nums.length - 1) return nums[i];
  return -1
}


var singleNumber1 = (nums) => {
  return nums.reduce((t, c) => t^c)
}


console.log(singleNumber([1,1,3,4,5,6,5,6,4]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2,2,1]));


console.log(singleNumber1([1,1,3,4,5,6,5,6,4]));
console.log(singleNumber1([4,1,2,1,2]));
console.log(singleNumber1([2,2,1]));