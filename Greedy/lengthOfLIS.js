const lengthOfLIS = (nums) => {
    const len = nums.length
    let ans = 0
    const dp = new Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
        ans = Math.max(dp[i], ans)
    }
    return ans
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 100]))