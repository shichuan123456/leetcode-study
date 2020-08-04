var intersection = function(nums1, nums2) {
  const res = [];
  const set1 = new Set(nums1)
  for(let item of set1) {
    if(nums2.includes(item)){
      res.push(item);
    }
  }
  return res;
};

console.log(intersection([4,9,5], [9,4,9,8,4]));