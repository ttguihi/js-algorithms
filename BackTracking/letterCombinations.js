var letterCombinations = function (digits) {
    const k = digits.length;
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    if (!k) return [];
    if (k === 1) return map[digits].split("");
    const res = [], path = []

    const backTracking = (digits, index, k) => {
        if (path.length === k) {
            res.push(path.join(''))
            return
        }

        for (const char of map[digits[index]]) {
            path.push(char)

            backTracking(digits, index + 1, k)

            path.pop()

        }
    }

    backTracking(digits, 0, k)
    return res
}

console.log(letterCombinations("23"))
console.log(letterCombinations("2"))