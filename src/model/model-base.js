const { v4: uuidv4 } = require('uuid');

class ModalBase {
    #_id
    constructor() {
        const id = uuidv4()
        this.#_id = id
        this.id = id
    }
}

module.exports = ModalBase