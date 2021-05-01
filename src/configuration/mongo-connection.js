const MongoClient = require('mongodb').MongoClient

class MongoConnection {
    #connectionString
    database = null
    client = null
    
    constructor(connectionString, dbName) {
        this.#connectionString = connectionString
        this.dbName = dbName

    }

    async connect() {
        if(this.database) return
        try {
            this.client = new MongoClient(this.#connectionString, { useUnifiedTopology: true })
            await this.client.connect()
            this.database = this.client.db(this.dbName)
            
        } catch (error) {
            throw error
        }
    }

    async disconnect() {
        if(!this.client) return
        
        await this.client.close()

        this.database = null
        this.client = null
    }
}

module.exports = MongoConnection