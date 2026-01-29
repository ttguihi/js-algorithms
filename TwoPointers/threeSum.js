const threeSum = (nums) => {
    nums.sort((a, b) => a - b) //先排序 这里不要数组下标 所以可以排序后使用双指针
    //nums : [ -4, -1, -1, 0, 1, 2 ]
    const len = nums.length
    const resArr = []
    for (let i = 0; i < len; i++) {
        const x = nums[i] // 当前数字
        if (x > 0) return resArr //当前数字都大于0了 就不会有机会后面加起来 = 0了 直接返回结果
        if (i > 0 && x === nums[i - 1]) continue // 去重的作用 
        let l = i + 1
        let r = len - 1
        while (l < r) {
            const res = x + nums[l] + nums[r]
            if (res === 0) {
                resArr.push([x, nums[l], nums[r]])
                l++
                r--
                while (nums[l] === nums[l - 1]) l++ //去重
                while (nums[r] === nums[r + 1]) r-- //去重
            }
            else if (res < 0) l++
            else r--
        }
    }
    return resArr
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))