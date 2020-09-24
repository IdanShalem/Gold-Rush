const Matrix = require('../../Personal-Exercises/week-7/week-7-IdanShalem/Day-3/Matrices/Exercise/matrices-lesson-exercises-master/src/Matrix')

class GoldRush extends Matrix {
    
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.players = { 1: {row: 0, col: 0, points: 0}, 2: {row: rowNum - 1, col: colNum - 1, points: 0}}
        this.directions = {up: {name:"row", val:-1}, down: {name:"row", val:1}, left: {name:'col',val:-1}, right: {name:'col',val:1}}
        this.loadBoard = this.loadBoard()
    }

    loadBoard(){
        this.generatePlayers()
        this.generateBlocks()
        this.generateCoins()
    }

    generatePlayers() {
        this.alter(this.players[1].row, this.players[1].col, 1)
        this.alter(this.players[2].row, this.players[2].col, 2)
    }

    generateBlocks() {
        let numCoins = Math.floor(Math.random() * (((this.rowNums + this.colNums) - 2) / 2)) + this.rowNums 
        while(numCoins > 0) {
            let row = Math.floor((Math.random() * this.rowNums))
            let col = Math.floor((Math.random() * this.colNums))
            if(this.get(row, col) === '.') {
                this.alter(row, col, 'b')
                numCoins--
            }
        }
    }

    generateCoins() {
        let numCoins = Math.floor(Math.random() * (((this.rowNums * this.colNums) - 2) / 2)) + this.rowNums 
        while(numCoins > 0) {
            let row = Math.floor((Math.random() * this.rowNums))
            let col = Math.floor((Math.random() * this.colNums))
            if(this.get(row, col) === '.') {
                this.alter(row, col, 'c')
                numCoins--
            }
        }
    }

    movePlayer(player, direction) {
        const nextDirection = {row: this.players[player].row, col: this.players[player].col}
        nextDirection[this.directions[direction].name] += this.directions[direction].val
        if(this.validMove(nextDirection)){
            this.alter(this.players[player].row, this.players[player].col, '.')
            this.players[player].col = nextDirection.col 
            this.players[player].row = nextDirection.row 
            if(this.get(this.players[player].row, this.players[player].col) === 'c') {
                this.players[player].points += 10
            }
            this.alter(this.players[player].row, this.players[player].col, player) 
        } else {
            return false
        }
    }

    validMove(nextDirection) {
        console.log(nextDirection)
        if(nextDirection.row >= 0 && nextDirection.col >= 0 && 
                nextDirection.row < this.rowNums && nextDirection.col < this.colNums) {
            if(this.get(nextDirection.row, nextDirection.col) === '.' || this.get(nextDirection.row, nextDirection.col) === 'c') {
                return true
            } else {
                return false
            }
        } 
        return false
    }

}

// const board = new GoldRush(5,5)
// board.movePlayer(1, "down")
// board.print()
// console.log('')
// board.movePlayer(1, "right")
// board.print()
// console.log('')
// board.movePlayer(1, "right")
// board.print()
// console.log('')
// board.movePlayer(1, "up")
// board.print()
// console.log('')
// board.movePlayer(1, "left")
// board.print()
// console.log('')
// board.movePlayer(1, "down")
// board.print()
// console.log('')
// console.log(board.players[1].points) 
