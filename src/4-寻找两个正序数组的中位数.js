/* 
  给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
*/

// 常规sort
/* var findMedianSortedArrays = function(nums1, nums2) {
  const num = [...nums1, ...nums2].sort((a,b) => {
    return a - b; 
  });
  return num.length % 2 === 0 ? (num[num.length / 2] + num[num.length/2 - 1]) / 2 : num[Math.floor(num.length/2)];
}; */

// 归并排序
/* var findMedianSortedArrays = function(nums1, nums2) {
  const merged = [];
  let i = 0 , j = 0;
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      merged.push(nums1[i++])
    } else {
      merged.push(nums2[j++]);
    }
  }

  while(i < nums1.length) {
    merged.push(nums1[i++])
  }

  while(j < nums2.length) {
    merged.push(nums2[j++])
  }

  const { length } = merged;
  return length % 2 === 1 ? merged[Math.floor(length/2)] : (merged[length/2] + merged[length/2 - 1]) /2;
}; */

// 
/* 
var findMedianSortedArrays = function(nums1, nums2) {
  let reIndex = nums2.length - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
      while (nums1[i] <= nums2[reIndex] && reIndex > -1) {
          nums1.splice(i + 1, 0, ...(nums2.splice(reIndex, 1)));
          reIndex--;
      }
  }
  const arr = nums2.concat(nums1);
  const { length } = arr;
  return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
}; */

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3,4]))