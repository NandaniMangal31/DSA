function profit(prices) {
    let minprice = prices[0];
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        }
        let profit = prices[i] - minprice;
        if (profit > maxprofit) {
            maxprofit = profit;
        }
    }
    return maxprofit;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(profit(prices));