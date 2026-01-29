var combinationSum2 = function (candidates, target) {
    const res = []
    const path = []

    candidates.sort((a, b) => a - b)

    const backTracking = (targetSum, startIndex) => {
        if (targetSum < 0) return
        if (targetSum === 0) {
            res.push(path.slice())
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if (targetSum < 0) return
            if (startIndex < i && candidates[i] === candidates[i - 1]) {
                continue
            }
            path.push(candidates[i])

            backTracking(targetSum - candidates[i], i + 1)
            path.pop()
        }
    }

    backTracking(target, 0)
    return res
}

// 测试
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
// 正确输出：[[1,1,6], [1,2,5], [1,7], [2,6]]