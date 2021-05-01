const userRepository = mongoConnection => {

    const collection = mongoConnection.database.collection('user')

    const insert = async user => await collection.insertOne(user)
    const getAll = async () => await collection.find({}).toArray()
    const getById = async id => await collection.findOne({id: id})
    const getByName = async name => await collection.findOne({name: name})

    return {
        insert,
        getAll,
        getById,
        getByName
    }
}

module.exports = userRepository