var express = require('express');
var router = express.Router();

const messageRoutes = messageService => {

    router.post('/message', async (req, res) => {
        await messageService.create(req.body)

        res.set('Content-Type', 'text/plain')
        res.send()
    })

    router.get('/room/:room', async (req, res) => {
        const messages = await messageService.getByRoom(req.params.room)

        res.send(messages)
    })

    return router
}

module.exports = messageRoutes