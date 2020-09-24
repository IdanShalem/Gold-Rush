const render = new Render()
let board

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

$('#start-game').on('click', function() {
    const   rows    = parseInt($('#rows-input').val()),
            columns  = parseInt($('#columns-input').val())
    
    board = new GoldRush(rows, columns)
    render.renderMatrix(board.matrix)
    $('#board-container').css('grid-template-columns', `repeat(${rows}, 1fr`)
    $('#board-container').css('grid-template-rows', `repeat(${columns}, 1fr`)
})


$(document).keypress(function (e) {
    console.log(typeof e.which)
    // if(board.matrix){
    //     console.log(keyBoard[87])
        // if(keyBoard[e.which]){
        //     console.log(keyBoard[e.which].player, keyBoard[e.which].direction)
        //     // board.movePlayer(keyBoard[e.which].player, keyBoard[e.which].direction)
        //     // render.renderMatrix(board.matrix) 
        // }
        
    // }
    

})

// window.addEventListener("keydown", event => {
//     if (event.isComposing || keyBoard[event.keyCode]) {
//         board.movePlayer(keyBoard[event.keyCode].player, keyBoard[event.keyCode].direction)
//         render.renderMatrix(board.matrix)
//     }
//     console.log(board.player1.score)
//   });