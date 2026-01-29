var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false); //标记需要被置为0的行
    const col = new Array(n).fill(false); //标记需要被置为0的列
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }
    console.log(row)
    console.log(col)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix
};



console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))  // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]