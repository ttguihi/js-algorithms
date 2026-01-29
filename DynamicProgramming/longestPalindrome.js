var longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        expand(i, i)
        expand(i, i + 1)
    }

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        const maxStr = s.slice(l + 1, r + 1 - 1)
        if (maxStr.length > res.length) res = maxStr
    }

    return res
};
