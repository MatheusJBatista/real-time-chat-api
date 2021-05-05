
const server = require('./src/infra/configure-server/configure-server')

const configureSocketIo = require('./src/communication/socket/configure-socket-io')
const createUserRoutes = require('./src/routes/user-routes')
const createMessageRoutes = require('./src/routes/message-routes')

const startup = async () => {
    await server.initialize()
    configureSocketIo()                 
    
    server.express.use('/user', createUserRoutes())
    server.express.use('/message', createMessageRoutes())
}

startup()
