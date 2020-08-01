/* 
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
*/
// 双指针
/* var twoSum = function(nums, target) {
    const mapNums = nums.map((val, idx) => {
      return  { val, idx };
    })
    mapNums.sort((a,b) => a.val - b.val);
    let i = 0, j = mapNums.length - 1;
    const res = [];
    while(i < j) {
      const sum = mapNums[i].val + mapNums[j].val;
      if ( sum > target) {
        j--;
        i++;
      } else {
        return [mapNums[i].idx, mapNums[j].idx];
      }
    }
    return []
}; */

// map
/* var twoSum = function(nums, target) {
  const map = {}
  for(let i = 0; i < nums.length; i++) {
    if(map[target-nums[i]] != undefined) {
      return [i, map[target-nums[i]]];
    }else {
      map[nums[i]] = i
    }
  }
  return [];
}; 
console.log(twoSum([3,2,4], 7)); */

// some
/* var twoSum = function(nums, target) {
  var _result = []
  nums.some(function (item, index) {
    var _index = nums.indexOf(target - item)
    if (_index !== -1 && index !== _index) {
      _result = [index, _index]
      return true
    }
  })
  return _result
}; */

// includes
// var twoSum = function(nums, target) {
//   for(var i = 0;i<nums.length;i++){
//     let disc = target-nums[i]
//     if(nums.includes(disc)&&nums.indexOf(disc)!==i){
//       return ([i,nums.indexOf(disc)]); 
//       }
//     }
//   }

console.log(twoSum([3,2,4, 5 , 5], 10));