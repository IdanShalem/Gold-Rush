class GoldRush extends Matrix {
    
    constructor(rowNum, colNum){
        super(rowNum, colNum)
        this.players = { 1: {row: 0, col: 0, points: 0}, 2: {row: rowNum - 1, col: colNum - 1, points: 0}}
        this.directions = {up: {name:"row", val:-1}, down: {name:"row", val:1}, left: {name:'col',val:-1}, right: {name:'col',val:1}}
        this.numCoins = 0
        this.loadBoard = this.loadBoard()
    }

    loadBoard(){
        this.generatePlayers()
        this.generateSquares('b')
        this.generateSquares('c')
    }

    generatePlayers() {
        this.alter(this.players[1].row, this.players[1].col, '1')
        this.alter(this.players[2].row, this.players[2].col, '2')
    }

    generateSquares(val) {
        let numSquares
        if(val === 'b') {
            numSquares = Math.floor( Math.random() * (( this.rowNums + this.colNums - 2) / 2) ) + this.rowNums
        } else {
            numSquares = Math.floor(Math.random() * ((this.rowNums * this.colNums - 2) / 2)) + this.rowNums
            this.numCoins = numSquares
        }
        while(numSquares > 0) {
            let row = Math.floor((Math.random() * this.rowNums))
            let col = Math.floor((Math.random() * this.colNums))
            if(this.get(row, col) === '.') {
                this.alter(row, col, val)
                numSquares--
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
                this.numCoins--
            }
            this.alter(this.players[player].row, this.players[player].col, `${player}`) 
        } else {
            return false
        }
    }

    validMove(nextDirection) {
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
