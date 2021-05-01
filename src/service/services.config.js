const userService = require('./user-service')
const messageService = require('./message-service')

const ServicesConfig = (repositories, socket) => {

    const user = userService(repositories.userRepository)
    const message = messageService(repositories.messageRepository, socket)

    return {
        userService: user,
        messageService: message
    }
}

module.exports = ServicesConfig