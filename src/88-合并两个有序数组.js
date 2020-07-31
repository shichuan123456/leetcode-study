


var merge = function(nums1, m, nums2, n) {
  let nums1Idx = m -1, nums2Idx = n - 1, tail = m + n - 1;
  while(nums2Idx >= 0) {
    if(nums1[nums1Idx] >= nums2[nums2Idx] ) {
      nums1[tail] = nums1[nums1Idx];
      tail--;
      nums1Idx--;
    }else{
      nums1[tail] = nums2[nums2Idx];
      tail--;
      nums2Idx--;
    }
  }
  return nums1;
};

const nums1 = [1,2,3], nums2 = [0,5,6];
console.log(merge(nums1, 3, nums2, 3));