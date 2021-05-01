const ModelBase = require('./model-base')

class User extends ModelBase{
    
    constructor(name) {
        super()
        this.name = name
    }
}

module.exports = User