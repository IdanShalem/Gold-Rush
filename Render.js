class Render {

    renderMatrix(matrix){
        $('#board-container').empty()
        matrix.forEach(row => {
            // console.log(row)
            const src = $('#matrix-template').html()
            const template = Handlebars.compile(src)
            const newHTML = template({row})
            // console.log(newHTML)
            $('#board-container').append(newHTML) 
        })
    }

}