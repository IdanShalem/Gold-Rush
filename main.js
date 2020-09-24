const render = new Render()
let board

$('#start-game').on('click', function() {
    const   rows    = parseInt($('#rows-input').val()),
            columns  = parseInt($('#columns-input').val())
    $('#board-container').css('grid-template-columns', `repeat(${rows}, 1fr`)
    $('#board-container').css('grid-template-rows', `repeat(${columns}, 1fr`)
    board = new GoldRush(rows, columns)
    render.renderMatrix(board.matrix)
})