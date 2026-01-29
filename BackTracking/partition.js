const ifBack = (str, _left, _right) => {
    let left = _left
    let right = _right
    let x = true
    while (left < right) {
        if (str[left] !== str[right]) {
            x = false
        }
        left++
        right--
    }
    return x
}
var partition = function (s) {
    const res = []
    const path = []
    const backTracking = (curStr, startIndex) => {
        if (startIndex >= s.length) {
            res.push(path.slice())
            return
        }

        for (let i = startIndex; i < s.length; i++) {
            if (ifBack(curStr, startIndex, i)) {
                path.push(curStr.substring(startIndex, i + 1))
            }
            else {
                continue
            }

            backTracking(curStr, i + 1)
            path.pop()
        }
    }
    backTracking(s, 0)
    return res
}
console.log(partition('ababa'))