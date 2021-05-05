const User = require("../model/user")
const UserRepository = require("../infra/repository/user-repository")

const createUserService = () => {
    const userRepository = new UserRepository()

    const create = async ({name}) => {
        const userByName = await getByName(name)
        if(userByName) return userByName._id
    
        const user = new User(name)
        await userRepository.insert(user)
    
        return user._id
    }
    
    const getAll = async () => await userRepository.getAll()
    
    const getById = async id => {
        const user = await userRepository.getById(id)
    
        return user
    }
    
    const getByName = async name => await userRepository.getByName(name)

    return {
        create,
        getAll,
        getById
    }
}

    

module.exports = createUserService