/* 
  如何写出正确的代码：
    1、确切定义变量的含义。
    2、循环不变量。
    3、少数据量的边界值测试。
    4、大数量的全面测试。
*/

const bi_find = (sourceArr, target) => {
  let i = 0, j = sourceArr.length - 1, midIdx;
  // 加入j = sourceArr.length, 那么这个数组是[0, n), 所以i===j不存在。
  // 非常清晰的定义边界值的意义。保证循环不变量
  while(i <= j) { // i == j  这个区间也存在，一个元素的数组，也是合理的
    // midIdx = Math.floor((i + j) / 2); 可能越界
    midIdx = i + Math.floor((j - i)/ 2);
    if(sourceArr[midIdx] === target) {
      return midIdx;
    }else if(sourceArr[midIdx] < target){
      i = midIdx + 1;  // 加1
    }else{
      j = midIdx - 1; // 减1
    }
  }
  return -1
}

console.log(bi_find([1,2,3,4,5], 5));