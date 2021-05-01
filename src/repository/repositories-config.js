const MongoConnection = require('../configuration/mongo-connection')
const messageRepository = require('./message-repository')
const userRepository = require('./user-repository')

const RepositoriesConfig = async () => {
    const mongoConnection = new MongoConnection('mongodb://localhost:27017', 'real-time-chat')
    await mongoConnection.connect()

    const user = userRepository(mongoConnection)
    const message = messageRepository(mongoConnection)

    return {
        userRepository: user,
        messageRepository: message
    }
}

module.exports = RepositoriesConfig