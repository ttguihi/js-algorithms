var coinChange = function (coins, amount) {
    // dp[i] : 凑成amount的金额需要的最小硬币数
    if (amount <= 0) return 0
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === Infinity ? - 1 : dp[amount]


};
console.log(coinChange([1, 2, 5], 11)) // 3

// 完全背包
