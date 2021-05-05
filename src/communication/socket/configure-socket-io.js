const socket = require('socket.io')
const server = require('../../infra/configure-server/configure-server')
const configureMessageSocket = require('./message-socket-communication')

const configureSocketIo = () => {
    const http = server.http
    const io = socket(http, {
        cors: {
            origin: "*"
        }
    })
            
    io.on('connection', socket =>{
        configureMessageSocket(socket)
    })  

    return io
}

module.exports = configureSocketIo