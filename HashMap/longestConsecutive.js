var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let ans = 0
    for (const x of set) {
        if (set.has(x - 1)) {
            continue
        }
        let y = x + 1
        while (set.has(y)) {
            y++
        }
        ans = Math.max(ans, y - x)
    }
    return ans
}

console.log("测试1", longestConsecutive([1, 0, 1, 2]))


