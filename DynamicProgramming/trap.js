//接雨水 leetcode42
//某个位置能接多少水 取决于左右两侧"最高柱子"中的高度较小值 - 当前柱子高度

const trap = (height) => {
    let ans = 0
    const len = height.length
    //初始化左右两侧"最高柱子"高度数组
    const leftMax = new Array(len).fill(0)
    const rightMax = new Array(len).fill(0)
    //初始化
    leftMax[0] = height[0]
    rightMax[len - 1] = height[len - 1]
    //遍历填充最高高度数组 
    for (let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    //遍历计算接雨水体积
    for (let i = 0; i < len; i++) {
        const volume = Math.min(leftMax[i], rightMax[i]) - height[i]
        ans += volume
    }

    return ans
}

//时间复杂度O(n) 
//空间复杂度O(n)


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))