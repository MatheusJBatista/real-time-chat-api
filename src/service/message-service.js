const messageService = repository => {
    
    const create = async ({room, userId, message}) => {
        await repository.insert({ room, userId, message })
    }

    const getByRoom = async (room) => await repository.getByRoom(room)
    

    return {
        create,
        getByRoom
    }
}

module.exports = messageService