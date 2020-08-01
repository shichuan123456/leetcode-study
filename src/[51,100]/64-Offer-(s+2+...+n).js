/* 
  求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
*/

// var sumNums = function(n) {
//   if(n === 1) return 1;
//   return n + sumNums(n-1);
// };

var sumNums = function(n) {
  return n && (n + sumNums(n-1))
}

console.log(sumNums(100))