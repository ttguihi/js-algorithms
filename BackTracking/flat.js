var flat = function (arr, n) {
    const res = []
    const traverse_flat = (arr, num) => {
        for (const x of arr) {
            if (num > 0 && Array.isArray(x)) traverse_flat(x, num - 1)
            else res.push(x)
        }
    }
    traverse_flat(arr, n)
    return res
}

//扁平化数组