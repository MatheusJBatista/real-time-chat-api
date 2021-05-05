const MongoClient = require('mongodb').MongoClient

class MongoConnection {
    client = null

    async connect(connectionString, dbName) {
        if(this.database) return
        try {
            this.client = new MongoClient(connectionString, { useUnifiedTopology: true })
            await this.client.connect()
            this.database = this.client.db(dbName)
            
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

module.exports = new MongoConnection()