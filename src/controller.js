
module.exports = {
    async gethello(request, response) {
     return response.json({ msg: true})
 },

 async createUser(request, response) {
     const {nome, idade} = request.body

     const payload = {
         nome,
         idade
     }

     return response.json(payload)
 },


async createCart(request, response) {
    const { descricao, valor, qtde } = request.body

    const product = {
        descricao,
        valor,
        qtde
    }

    return response.json({ data: product })
}
}