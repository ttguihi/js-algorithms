const lengthOfLIS = (nums) => {
    let dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {

        const num = nums[i]
        if (num > dp.at(-1)) {

            dp = [...dp, num]
        }
        else {
            const pos = findFirstBigger(dp, num)
            dp[pos] = num
        }
    }
    return dp.length

}

const findFirstBigger = (nums, target) => {
    const len = nums.length
    let l = 0
    let r = len - 1
    let ans = len
    while (l <= r) {
        let middle = (l + r) >> 1
        if (nums[middle] >= target) {
            ans = middle
            r = middle - 1
        }
        else {
            l = middle + 1
        }
    }
    return ans
}
// console.log(findFirstBigger([10, 9, 2, 5, 3, 7, 100, 4].sort((a, b) => a - b), 5))
// [2, 3, 4, 5, 7, 9, 10, 100]
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 100, 4]))
// 1  1  1  1  1  1  1
