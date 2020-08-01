
var maxProfit = function(prices) {
  let max = 0, minPrice = prices[0];
  for(let i = 1; i < prices.length; i++){
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    }else{
      const profit = prices[i] - minPrice;
      max = Math.max(profit, max);
    }
  }
  return max;
}

console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([7,1,5,3,6,4]));