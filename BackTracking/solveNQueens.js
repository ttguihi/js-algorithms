var solveNQueens = function (n) {
    const ans = [];
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill("."));

    // 优化判断函数，使用更高效的方法检查冲突
    const isValid = (row, col) => {
        // 检查同一列是否有皇后
        for (let i = 0; i < row; i++) {
            if (matrix[i][col] === "Q") {
                return false;
            }
        }

        // 检查左上方对角线是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (matrix[i][j] === "Q") {
                return false;
            }
        }

        // 检查右上方对角线是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (matrix[i][j] === "Q") {
                return false;
            }
        }

        return true;
    };

    const backtrack = (row) => {
        if (row === n) {
            // 将当前棋盘状态加入结果
            ans.push(matrix.map(rowArr => rowArr.join("")));
            return;
        }

        // 只需要遍历列，因为每行只能放一个皇后
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                matrix[row][col] = "Q";
                backtrack(row + 1);  // 进入下一行
                matrix[row][col] = ".";  // 回溯
            }
        }
    };

    backtrack(0);
    return ans;
};

console.log(solveNQueens(4))