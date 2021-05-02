const environmentBase = require("./base")
const externalConfig = require('../../public/config')

let environment = environmentBase()

if(process.env.CLIENT_ENV !== 'development') {
    environment = {
        ...environment,
        ...externalConfig
    }
}

module.exports = environment