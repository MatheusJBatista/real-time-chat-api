const createMessageService = require("../../service/message-service")

const configureMessageSocket = socket => {
    const messageService = createMessageService()
    socket.on('enter-room', room => {
        socket.join(room)
    
        socket.on('message', async data => {
            socket.to(room).emit('spread-message', data)
            await messageService.create(data)
        })
    })
}

module.exports = configureMessageSocket