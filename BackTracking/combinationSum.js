
var combinationSum = function (candidates, target) {
    const res = []
    const path = []
    const backTracking = (targetSum, sum, index) => {
        if (target < sum) return
        if (targetSum === sum) {
            res.push(path.slice())
            return
        }


        for (let i = index; i < candidates.length; i++) {

            path.push(candidates[i])
            sum += candidates[i]
            backTracking(targetSum, sum, i)
            sum -= candidates[i]
            path.pop()
        }
    }


    backTracking(target, 0, 0)


    return res
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8))