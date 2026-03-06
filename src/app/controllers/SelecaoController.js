import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

    //LISTA TUDO 
    async index(req,res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
}

    //LISTA  POR ID
    async show(req,res) {
        const id = req.params.id
        const row =  await SelecaoRepository.findById(id)
        res.json(row)
        
}

    //CRIAR DADOS
    async store(req,res) {
        const selecao = req.body
        const row =  await SelecaoRepository.create(selecao)
        res.json(row)
}

    //ATUALIZA DADOS
    async update(req,res) {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
        
    
}

    //DELETAR POR ID
    async delete(req,res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    
}

}

// padrão Singleton
export default new SelecaoController()
