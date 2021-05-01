const messageRepository = mongoConnection => {

    const collection = mongoConnection.database.collection('message')

    const insert = async user => await collection.insertOne(user)
    const getByRoom = async room => {
        return await collection
            .aggregate([
                {
                    $match: {
                        'room': room
                    }
                },
                {
                    $lookup: {
                        from: 'user',
                        localField: 'userId',
                        foreignField: 'id',
                        as: 'user'
                    }
                },
                {
                    $unwind: '$user'
                },
                {
                    $project: {
                        _id: 0,
                        room: 1,
                        userId: 1,
                        message: 1,
                        userName: '$user.name'
                    }
                }
            ]).toArray()
    }

    return {
        insert,
        getByRoom,
    }
}

module.exports = messageRepository