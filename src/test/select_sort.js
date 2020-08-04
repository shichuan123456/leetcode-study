const select_sort = (nums) => {
  for(let i = 0, len = nums.length - 1; i < len; i++) {
    let minIdx = i;
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    if(minIdx !== i) {
      const temp = nums[i];
      nums[i] = nums[minIdx];
      nums[minIdx] = temp;
    }
  }

  return nums;
}

console.log(select_sort([5,4,3,2,1,29,38,91,0]));