const express = require('express')
const cors = require('cors')

const connectMongoAsync = require('../configure-mongo/configure-mongo')

class Server {
    http = null
    express = null

    initialize = async () => {
        await connectMongoAsync()
        const app = express()
        
        app.use(cors())
        app.use(express.json())
        
        const port = process.env.PORT || 3001
            
        const http = require('http').createServer(app)
        http.listen(port, function(){
            console.log(`listening on port ${port}`)
        })
    
        this.http = http
        this.express = app
    }
}


module.exports = new Server()