class Render {

    renderMatrix(matrix, rows, columns){
        $('#board').empty()
        const src = $('#matrix-template').html()
        const template = Handlebars.compile(src)
        const newHTML = template({matrix})
        $('#board').append(newHTML) 
        $('#board-container').css('grid-template-columns', `repeat(${rows}, 1fr`)
        $('#board-container').css('grid-template-rows', `repeat(${columns}, 1fr`)
    }

    renderScore(score){
        const src = $('#score-template').html()
        const template = Handlebars.compile(src)
        const newHTML = template({score})
        $('#score').empty().append(newHTML)
    }

    renderWinner(player){
        $('#board').empty()
        player === 0 ? $('#board').append(`<h1 id="score-announce">It's a tie!</h1>`) :
        $('#board').append(`<h1 id="score${player}" class="score-announce">Bravo! Player ${player} won!</h1>`)
    }

}