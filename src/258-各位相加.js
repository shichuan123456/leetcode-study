/* 
38 -> 11 -> 2
198 -> 18 -> 9
*/

var addDigits = function(num) {
  if(num <= 9) return num;
  let res = 0;
  while(num >= 10) {
    res = 0;
    while(num > 0) {
      res += num % 10;
      num = parseInt(num/10);
    }
    num = res;
  }
  return res;
}

console.log(addDigits(38));
console.log(addDigits(198));