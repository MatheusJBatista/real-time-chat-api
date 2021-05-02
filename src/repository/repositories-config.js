const MongoConnection = require('../configuration/mongo-connection')
const messageRepository = require('./message-repository')
const userRepository = require('./user-repository')
const environment = require('../environments')

const RepositoriesConfig = async () => {
    const mongoConnection = new MongoConnection(environment.mongoUrl, 'real-time-chat')
    await mongoConnection.connect()

    const user = userRepository(mongoConnection)
    const message = messageRepository(mongoConnection)

    return {
        userRepository: user,
        messageRepository: message,
        mongoConnection
    }
}

module.exports = RepositoriesConfig