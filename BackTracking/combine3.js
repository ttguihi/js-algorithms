const combinationSum3 = function (k, n) {
    const res = []
    const path = []
    const backTracking = (targetSum, k, startIndex) => {
        if (path.length > k) return
        if (targetSum < 0) return
        // if (targetSum === 0) {
        //     if (path.length === k) {
        //         res.push(path.slice())
        //     }
        //     return
        // }

        if (path.length === k) {
            if (targetSum === 0) {
                res.push(path.slice())
            }
            return
        }
        for (let i = startIndex; i <= 9; i++) {
            path.push(i)
            backTracking(targetSum - i, k, i + 1)
            path.pop()
        }
    }
    backTracking(n, k, 1)
    return res


}

console.log(combinationSum3(3, 9))