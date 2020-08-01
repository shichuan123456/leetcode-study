/* 
  给定两个数组，编写一个函数来计算它们的交集。
*/
const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
/* // 利用map记忆数组元素以及个数
var intersect = function(nums1, nums2) {
  const map = new Map(), res = [];
  nums1.forEach(item => {
    const count = map.get(item);
    count > 0 ? map.set(item, count + 1) : map.set(item, 1);
  })

  nums2.forEach(item => {
    const count = map.get(item);
    if(count > 0) {
      res.push(item);
      map.set(item, count - 1);
    }
  })

  return res;
}; */

// 利用双指针
/* var intersect = function(nums1, nums2) {
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  let i = 0, j = 0;
  const res = [];
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      i++;
    } else if(nums1[i] > nums2[j]) {
      j++;
    } else {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }
  return res;
} */

// 循环遍历
/* var intersect = function(nums1, nums2) {
  const res = [];
  if(nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  for(let i = 0; i < nums1.length;i++) {
    const idx = nums2.indexOf(nums1[i]);
    if(idx > -1) {
      res.push(...nums2.splice(idx, 1))
    }
  }
  return res;
} */

console.log(intersect(nums1, nums2));