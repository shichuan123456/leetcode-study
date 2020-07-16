// var reverse = function(x) {
//   let res;
//   if(x < 0) {
//     res = 0 - _reverse(x.toString().slice(1))
//   }  else {
//     res = _reverse(x);
//   }
//   if(res<Math.pow(-2,31)||res>=Math.pow(2,31)-1){
//     return 0
//   }
//   return res;
// };

// var _reverse = function(x) {
//   return parseInt(x.toString().split("").reverse().join(""));
// }


/* var reverse = function(x) {
  let result = 0;
  while(x !== 0) {
      result = result * 10 + x % 10;
      x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
 */

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))