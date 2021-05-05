const RepositoryBase = require("./repository-base")

class MessageRepository extends RepositoryBase {
    constructor() {
        super('message')
    }

    getByRoom = async room => {
        return await this.collection
            .aggregate([
                {
                    $match: {
                        'room': room
                    }
                },
                {
                    "$addFields": {
                        "userId": {
                            "$toObjectId": "$userId"
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'user',
                        localField: 'userId',
                        foreignField: '_id',
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
}

module.exports = MessageRepository