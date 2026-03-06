//CRUD:

import {consulta} from "../database/conexao.js"

class SelecaoRepository {

    //CRIAR
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')

        
    }

    //BUCAR TUDO
    findAll() {
        
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Não foi possível localizar')

}

    //BUSCAR POR ID
    findById(id) { 
    
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    return consulta(sql, id,  'Não foi possível localizar')

} 

    //ATUALIZAR POR ID
    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id],  'Não foi possível atualizar')

    }
    
    //DELETAR POR ID
    delete (id) {
        
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível deletar')

    }

}

export default new SelecaoRepository()
