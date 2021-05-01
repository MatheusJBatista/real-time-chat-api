const socket = require('socket.io')

const configureSocketIo = (http, messageService) => {
    const io = socket(http, {
        cors: {
            origin: "*"
        }
    })
            
    io.on('connection', (socket)=>{
        socket.on('enter-room', room => {
            socket.join(room)
    
            socket.on('message', async data => {
                socket.to(room).emit('spread-message', data)
                await messageService.create(data)
            })
        })
    })  

    return io
}

module.exports = configureSocketIo