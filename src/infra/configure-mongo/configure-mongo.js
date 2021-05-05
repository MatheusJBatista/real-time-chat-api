const mongoConnection = require('./mongo-connection')
const environment = require('../../environments/index')

const connectMongoAsync = async () => {
    await mongoConnection.connect(environment.mongoUrl, 'real-time-chat')
}

module.exports = connectMongoAsync