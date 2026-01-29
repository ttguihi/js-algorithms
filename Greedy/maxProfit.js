var maxProfit = function (prices) {
    let minPrice = Infinity
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - minPrice, maxProfit) //每次都想要是能在最低点买来并卖出就好了
        minPrice = Math.min(prices[i], minPrice) //每次去找最低价格
    }

    return maxProfit
}


console.log(maxProfit([7, 2, 9, 1, 6, 4, 10])) // 9