const RepositoryBase = require("./repository-base")

class UserRepository extends RepositoryBase {
    constructor() {
        super('user')
    }
    getByName = async name => await this.collection.findOne({name: name})
}

module.exports = UserRepository