const MessageRepository = require('../infra/repository/message-repository')

const createMessageService = () => {
    const messageRepository = new MessageRepository()
    
    const create = async ({room, userId, message}) => await messageRepository.insert({ room, userId, message })
    const getByRoom = async (room) => await messageRepository.getByRoom(room)

    return {
        create,
        getByRoom
    }
}


module.exports = createMessageService