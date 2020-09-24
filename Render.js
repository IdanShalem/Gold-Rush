class Render {

    renderMatrix(matrix){
        $('#board-container').empty()
        $('#board').empty()
        // console.log(row)
        const src = $('#matrix-template').html()
        const template = Handlebars.compile(src)
        const newHTML = template({matrix})
        // console.log(newHTML)
        $('#board').append(newHTML) 
    }

}