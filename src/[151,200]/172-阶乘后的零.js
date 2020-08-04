
// 给定一个整数 n，返回 n! 结果尾数中零的数量。
/**
 * @param {number} n
 * @return {number}
 */
// 寻找2的倍数和5的倍数，因为2的倍数肯定比5多，所以只需要找5的倍数，多少个5就有多少个0；
var trailingZeroes = function(n) {
  if(n<5){
      return 0;
  }else{
      let k=Math.floor(n/5);
      return k+trailingZeroes(k); 
  }
};

var trailingZeroes1 = function(n) {
  let res=0;
  while(n>=5){
      let k=Math.floor(n/5);
      res+=k;
      n=k;
  }
  return res;
};

console.log(trailingZeroes(5));
console.log(trailingZeroes1(5));
