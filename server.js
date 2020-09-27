const   express     = require('express'),
        bodyparser  = require('body-parser'),
        path        = require('path'),
        port        = 3000,
        app         = express(),
        http        = require('http').createServer(app),
        io = require('socket.io')(http)


app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true }))

io.on('connection', (socket) => {
  console.log('a user connected');
})

io.on('connection', (socket) => {
    socket.on('player moved', (board) => {
        io.emit('player moved', board)
    });
});

http.listen(process.env.PORT || port, function(){
    console.log(`Server is up and runing on localhost:${port}`)
})