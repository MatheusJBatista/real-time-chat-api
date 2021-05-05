const mongoConnection = require('../configure-mongo/mongo-connection')
const mongo = require('mongodb')

class RepositoryBase {
    constructor(collection) {
        this.collection = mongoConnection.database.collection(collection)

    }
    
    insert = async document => await this.collection.insertOne(document)
    insertMany = async documents => await this.collection.insertMany(documents)
    update = async document => 
        await this.collection.updateOne({ _id: document._id }, { $set: {
            ...document
        } })
    getAll = async () => await this.collection.find({}).toArray()
    getById = async id => await this.collection.findOne({_id: mongo.ObjectId(id)})
}

module.exports = RepositoryBase