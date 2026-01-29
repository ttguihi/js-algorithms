const isValid = (s) => {
    const stack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (const char of s) {
        if (char in map) { stack.push(char); continue }
        if (map[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0

}

console.log(isValid('{}'))
console.log(isValid('{)'))
console.log(isValid('(){}[]'))
console.log(isValid('([)]'))

