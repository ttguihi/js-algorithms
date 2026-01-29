//确定dp数组含义:dp[i] => 偷到第i家时最高金额
//确定递推公式: dp[i] = max(dp[i-2]+nums[i],dp[i-1])
//初始化dp数组:  dp[0] = nums[0] 
//确定遍历顺序
//举例推导
const rob = (nums) => {
    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[nums.length - 1]
}