class Matrix {

    constructor(rowNums, colNums) {
        this.matrix = this.generateMatrix(rowNums, colNums)
        this.rowNums = rowNums
        this.colNums = colNums
    }

    generateMatrix(rowNums, colNums) {
        let   matrix = []

        for(let r = 0; r < rowNums; r++) {
            matrix.push([])
            for(let c = 0; c < colNums; c++){
                matrix[r].push('.')
            }
        }

        return matrix
    }

    printMatrix = function() {
        for(let r = 0; r < this.matrix.length; r++){
            for(let c = 0; c < this.matrix[r].length; c++){
                console.log(this.matrix[r][c])
            }
        }
    }
    
    get = function(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    
    print = function() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        } 
    }
    
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow = function(rowNum) {
        for(let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    
    alter = function(rowNum, colNum, upVal) {
        this.matrix[rowNum][colNum] = upVal
    }

    findCoordinate(value) {
        for(let r = 0; r < this.matrix.length; r++) {
            for(let c = 0; c < this.matrix[r].length; c++) {
                if(this.matrix[r][c] === value) {
                    return {x: c, y: r}
                }
            }
        }
        return null
    }
}