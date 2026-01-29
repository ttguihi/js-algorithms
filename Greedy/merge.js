const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (cur[0] < prev[1]) {
            prev[1] = Math.max(cur[1], prev[1])
        }
        else {
            res.push(prev)
            prev = cur
        }
    }
    res.push(prev)
    // 循环在 i=3结束后就停止了
    // 但是最后一个 prev=[15,18]还在"等待处理"
    // 它没有被加入到 res中，因为循环已经结束了
    return res
}


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))