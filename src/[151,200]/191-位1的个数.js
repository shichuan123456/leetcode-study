/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0; // count计数
  let mask = 1; // 利用掩码去一位一位判断
  for(let i = 0;i < 32;i++){
      if((n & mask) != 0){
          count++;
      }
      mask <<= 1;
  }
  return count;
};

console.log(hammingWeight(1023));