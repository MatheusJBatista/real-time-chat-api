const User = require("../model/user")

const userService = repository => {
    
    const create = async ({name}) => {
        const userByName = await getByName(name)
        if(userByName) return userByName.id

        const user = new User(name)
        await repository.insert(user)

        return user.id
    }

    const getAll = async () => await repository.getAll()
    const getById = async id => {
        const user = await repository.getById(id)

        return user
    }

    const getByName = async name => await repository.getByName(name)
    

    return {
        create,
        getAll,
        getById
    }
}

module.exports = userService