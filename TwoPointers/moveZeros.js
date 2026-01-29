// const moveZeroes = (nums) => {
//     let stackSize = 0
//     for (const x of nums) {
//         if (x !== 0) nums[stackSize++] = x
//     }
//     nums.fill(0, stackSize)
//     return nums
// }

//1 0 0 1 0
// i0指向最左边的那个0

const moveZeroes = (nums) => {
    let i0 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i0], nums[i]] = [nums[i], nums[i0]]
            i0++
        }
    }
    return nums
}

console.log(moveZeroes([1, 0, 0, 1, 0, 0, 1]))