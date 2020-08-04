const moveZeroes = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      res.push(nums[i])
    }
  };
  
  for(let j = res.length; j < nums.length; j++) {
    res.push(0)
  }
  return res;
}

const moveZeroes1 = (nums) => {
  let k = 0; // nums中[0, k)的元素均为非0元素 
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      if(k !== i) {
        nums[k] = nums[i];
        nums[i] = 0;
      }
      k++;
    }
  }
  return nums;
}

const moveZeroes2 = (nums) => {
  let l = 0, r = nums.length -1;
  while(l < r) {
    if(nums[l] === 0 && nums[r] !== 0) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r++;
    }else if(nums[l] === 0 && nums[r] === 0) {
      r--;
    }else if((nums[l] !== 0 && nums[r] === 0)){
      r--;
      l++;
    } else {
      l++;
    }
  }
  return nums;
}

console.log(moveZeroes([2,0,5,0,4,0,4,4,3,2,1,0]));
console.log(moveZeroes1([2,0,5,0,4,0,4,4,3,2,1,0]));
console.log(moveZeroes2([2,0,5,0,4,0,4,4,3,2,1,0]));