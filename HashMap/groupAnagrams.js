var groupAnagrams = function (strs) {
    const strMap = new Map()
    const res = []
    for (const str of strs) {
        const sortStr = [...str].sort().join('')
        // console.log(sortStr)
        if (!strMap.has(sortStr)) {
            strMap.set(sortStr, [str])
            // console.log(strMap)
        }
        else {
            strMap.set(sortStr, [...strMap.get(sortStr), str])
        }
    }
    for (const [key, value] of strMap) {
        res.push(value)
    }
    // console.log(res)
    return res
}

// console.log([...'eab'].sort())
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))