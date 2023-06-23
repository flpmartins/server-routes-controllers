const { Router } = require('express')

const { gethello, createUser, createCart } = require('./controller')

const routes = Router()

routes.get('/hello', gethello)

routes.post('/user', createUser)

routes.post('/cart', createCart)


module.exports = routes