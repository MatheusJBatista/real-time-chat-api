const express = require('express')
const cors = require('cors')
const RepositoriesConfig = require('./src/repository/repositories-config')
const ServicesConfig = require('./src/service/services.config')
const configureSocketIo = require('./src/socket/configure-socket-io')

const userRoutes = require('./src/routes/user-routes')
const messageRoutes = require('./src/routes/message-routes')

const startup = async () => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    
    const http = require('http').createServer(app)
    http.listen(3001, function(){
        console.log('listening on port 3001')
    })
    
    
    const repositories = await RepositoriesConfig()
    const services = ServicesConfig(repositories)
    
    configureSocketIo(http, services.messageService)                 
    
    app.use('/user',userRoutes(services.userService))
    app.use('/message', messageRoutes(services.messageService))
    
}

startup()
