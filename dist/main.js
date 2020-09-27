const render = new Render()
let board
const socket = io()
 

const keyBoard = {
    87: {key: 'w', direction: 'up', player:1}, 
    65: {key: 'a', direction: 'left', player:1}, 
    83: {key: 's', direction: 'down', player:1}, 
    68: {key: 'd', direction: 'right', player:1}, 
    38: {key: 'up-arrow', direction: 'up', player:2}, 
    37: {key: 'left-arrow', direction: 'left', player:2}, 
    40: {key: 'down-arrow', direction: 'down', player:2}, 
    39: {key: 'right-arrow', direction: 'right', player:2}
}

const matrixSizes = {
    1: {size: 7},
    2: {size: 10},
    3: {size: 15},
    4: {size: 20}
}

socket.on('player moved', function(boardBrodcast){
    if(board){
        board.matrix = boardBrodcast.matrix
        board.players = boardBrodcast.players
        board.rowNums = boardBrodcast.rowNums
        board.colNums = boardBrodcast.colNums
    } else {
        board = new GoldRush(boardBrodcast.rowNums, boardBrodcast.colNums)
        board.matrix = boardBrodcast.matrix
        board.players = boardBrodcast.players
        board.rowNums = boardBrodcast.rowNums
        board.colNums = boardBrodcast.colNums
    }
    render.renderMatrix(board.matrix, board.rowNums, board.colNums) 
    render.renderScore([{p1: board.players[1].points, p2: board.players[2].points}])
});


$('#start-game').on('click', function() {
    const sizeSelected = $( "#matrix-select option:selected" ).val(),
            rowNcols = matrixSizes[sizeSelected].size
    board = new GoldRush(rowNcols, rowNcols)
    socket.emit('player moved', board)
})


$(document).keydown(function (e) {
    if(board){
        if(keyBoard[e.which]){
            board.movePlayer(keyBoard[e.which].player, keyBoard[e.which].direction)
            socket.emit('player moved', board)
            if(board.numCoins === 0) {
                board.players[1].points === board.players[2].points ?
                    render.renderWinner(0) :
                    board.players[1].points > board.players[2].points ?
                    render.renderWinner(1) : render.renderWinner(2)
            }
            
        }
        
    }
    
    

})

// window.addEventListener("keydown", event => {
//     if (event.isComposing || keyBoard[event.keyCode]) {
//         board.movePlayer(keyBoard[event.keyCode].player, keyBoard[event.keyCode].direction)
//         render.renderMatrix(board.matrix)
//     }
//     console.log(board.player1.score)
//   });