/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for (let price of prices) {
      if (price < buyPrice) {
          buyPrice = price;
      } else {
          if (price - buyPrice > profit) {
              profit = price - buyPrice;
          }
      }
  }
  return profit;
};