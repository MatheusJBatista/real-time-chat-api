var express = require('express');
var router = express.Router();

const userRoutes = userService => {
    router.post('/create', async (req, res) => {
        const userId = await userService.create(req.body)

        res.set('Content-Type', 'text/plain')
        res.send(userId)
    })
    router.get('/:id', async (req, res) => {
        const user = await userService.getById(req.params.id)

        res.send(user)
    })
    router.get('/', async (req, res) => {
        const users = await userService.getAll()

        res.send(users)
    })

    return router
}

module.exports = userRoutes