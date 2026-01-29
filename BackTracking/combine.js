var combine = function (n, k) {
    let result = []
    let path = []
    const backTracking = (n, k, startIndex) => {
        if (path.length === k) {
            result.push(path.slice())
            return
        }

        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backTracking(n, k, i + 1)
            path.pop()
        }
    }
    backTracking(n, k, 1)
    return result
}


