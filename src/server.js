const express = require('express')

const server = express()

server.use(express.json())

server.use('/hello', (request, response) => {
    return response.json({ msg: true })
})

server.use('/user', (request, response) => {
    const {nome, idade} = request.body

    const payload = {
        nome,
        idade
    }

    return response.json(payload)
})

server.use('/cart', (request, response) => {
    const { descricao, valor, qtde } = request.body

    const product = {
        descricao,
        valor,
        qtde
    }

    return response.json({ data: product })
})

server.listen(3333, () => {
    return console.log (`rodando na porta ${3333}`)
})