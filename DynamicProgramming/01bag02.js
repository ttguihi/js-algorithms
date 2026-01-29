const package = (bagWeight, value, weight) => {
    let result = []
    for (let j = 0; j <= bagWeight; j++) {
        result[j] = j >= weight[0] ? value[0] : 0
    }

    for (let i = 1; i < value.length; i++) {
        const next = []
        for (let j = 0; j <= bagWeight; j++) {
            if (j >= weight[i]) {
                next[j] = Math.max(result[j], value[i] + result[j - weight[i]])
            }
            else {
                next[j] = result[j]
            }
        }
        result = next
    }
    return result[bagWeight]

}


const result = package(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3])
console.log(result) //13